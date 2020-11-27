const timestamp = require("timestamp");

var ObjectId = require("node-time-uuid");

//Create a new UUID
const uuid = new ObjectId().toString("base64url");

const decoded = new ObjectId(uuid);

console.log(uuid);

// Import Firebase
const firebase = require("firebase");

// Auth variables
const { firebaseAuth } = require("../auth/firebase-auth");
// Initialize Firebase
firebase.initializeApp(firebaseAuth);
// Database Reference
const database = firebase.database();

// -------------------------------------------------------------------------------
// ---------------------------------- FUNCTIONS ----------------------------------
// -------------------------------------------------------------------------------

// ---------------------------------- Users ----------------------------------

// Sign into Firebase
const userSignIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(`Successfully logged in as ${email}`);
      return Promise.resolve({
        uid: res.user.uid,
        displayName: res.user.displayName,
        photoURL: res.user.photoURL,
        email: res.user.email,
        emailVerified: res.user.emailVerified,
        isAnonymous: res.user.isAnonymous,
        phoneNumber: res.user.phoneNumber,
      });
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

// GET '/users/:user_id' - Get user profile (public facing)
// Get last post & store locally
const fetchUserProfile = (uid) => {
  return new Promise((resolve, reject) => {
    database
      .ref(`/users/${uid}`)
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          console.log(snapshot.val());
          resolve(snapshot.val());
        } else {
          reject(new Error("Failed to fetch last post"));
        }
      });
  });
};
// POST '/users/:user_id' - Create new user
// PATCH '/users/:user_id' - Update user data
// DEL '/users/:user_id' - Delete user
// GET '/users/:user_id/boards' - Get all boards attributed to user

// ---------------------------------- Boards ----------------------------------

// GET '/boards' - Get all boards except private ones
// GET '/boards/:board_id' - Get single board
// DEL '/boards/:board_id' - Delete single board
// PATCH '/boards/:board_id' - Update board
// POST '/boards' - Create new board

module.exports = { firebase, database, userSignIn, fetchUserProfile };
// export { userSignIn };
