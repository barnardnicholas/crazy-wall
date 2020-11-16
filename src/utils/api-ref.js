const timestamp = require("timestamp");

// Import Firebase
const firebase = require("firebase");

// Auth variables
const { firebaseAuth } = require("../auth/firebase-auth");

// Initialize Firebase
firebase.initializeApp(firebaseAuth);

// Database Reference
const database = firebase.database();

// ---------------------------------- FUNCTIONS ----------------------------------

// Sign into Firebase
const userSignIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(`Successfully logged in as ${email}`);
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

// Get play state from database & store locally
const getPlayState = () => {
  return database
    .ref("/state/is_playing")
    .once("value")
    .then((snapshot) => {
      return new Promise((resolve, reject) => {
        if (snapshot.val() === true) {
          state.isPlaying = true;
          resolve(true);
        } else {
          state.isPlaying = false;
          reject(new Error("Play state check failed"));
        }
      });
    });
};

// Get last post & store locally
const fetchLastPost = () => {
  console.log("Fetching last post from database");
  return new Promise((resolve, reject) => {
    database
      .ref("/state/last_post")
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          console.log(`Succeeded getting post ${snapshot.val().log_id}`);
          state.lastPost = snapshot.val();
          resolve();
        } else {
          reject(new Error("Failed to fetch last post"));
        }
      });
  });
};

// Upload log to database
const sendLog = (data) => {
  console.log(`Sending Log entry...`);
  return new Promise((resolve, reject) => {
    const time = timestamp();
    const formattedDate = new Date(time).toLocaleString();
    const newData = {
      frame_timestamp: state.nextPost.frame_timestamp || null,
      image_number: state.nextPost.image_number || null,
      filename: state.nextPost.filename || null,
      frame_number: state.nextPost.frame_number || null,
      subtitle: state.nextPost.subtitle || null,
      log_timestamp: time || null,
      log_status: state.nextPost.log_status || null,
      comment: state.nextPost.comment || null,
      log_date: formattedDate || null,
      log_id: state.nextPost.log_id || null,
      status: state.nextPost.status || null,
      tweet_url: state.nextPost.tweet_url || null,
      log_output: logOutput || null,
      ...data,
    };
    database
      .ref(`/posts/${time}`)
      .set(newData)
      .then(() => {
        console.log("Successfully posted log entry.");
        updateLastPost(newData).then(() => {
          console.log("Last post information updated successfully.");
          resolve();
        });
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// Update last post in database
const updateLastPost = (data) => {
  console.log("Updating last post information...");
  return new Promise((resolve, reject) => {
    database
      .ref(`/state/last_post`)
      .set(data)
      .then(() => {
        console.log("Success!");
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// Reset last post in database
const _resetLastPost = () => {
  const time = timestamp();
  const initialLastPost = {
    frame_timestamp: 7500,
    image_number: 4,
    filename: "img_004.jpg",
    frame_number: 180,
    subtitle: null,
    log_timestamp: time,
    log_status: "",
    comment: "Manual Reset",
    log_date: new Date(time).toLocaleString(),
    log_id: time,
    status: "",
    log_output: [],
  };
  console.log("Performing Manual Reset of last post information...");
  return new Promise((resolve, reject) => {
    database
      .ref(`/state/last_post`)
      .set(initialLastPost)
      .then(() => {
        console.log("Success!");
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// Erase all posts in database
const _eraseAllPosts = () => {
  return new Promise((resolve, reject) => {
    const time = timestamp();
    const formattedDate = new Date(time).toLocaleString();
    const newData = {
      date_last_erased: time,
    };
    database.ref(`/state`).set(newData);
    const newPostRef = database.ref(`/posts`);
    newPostRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      resolve(snapshot.val());
    });
  });
};

// Execute all functions in sequence - runs at every tick
const masterTaskRunner = () => {
  userSignIn(userEnv.userEmail, userEnv.userPassword)
    .then(() => {
      return getPlayState();
    })
    .then(() => {
      return fetchLastPost();
    })
    .then(() => {
      // Find next image
      return getNextPicture();
    })
    .then(() => {
      // Post Image to twitter
      return postPictureToTwitter();
    })
    .then(() => {
      // Send log entry
      sendLog();
    })
    .then(() => {
      // Reset State
      resetState();
    })
    .catch((err) => {
      if (firebase.auth().currentUser) {
        // sendLog({ comment: "Movie is not playing" });
        console.log("Movie is not playing");
      }
      console.log(err);
      resetState();
    });
};

module.exports = { firebase, database, userSignIn };
// export { userSignIn };
