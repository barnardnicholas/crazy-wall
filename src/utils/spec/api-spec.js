const { firebase, database, userSignIn, fetchUserProfile } = require("../api");
const { expect } = require("chai");
const { testUser } = require("../../auth/firebase-auth");

describe("userSignIn", () => {
  it("signs in successfully", () => {
    userSignIn(testUser.email, testUser.password)
      .then((user) => {
        expect(user);
        fetchUserProfile(testUser.uid).then((user) => {
          console.log(user);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// describe("fetchUserProfile", () => {
//   it("fetches user profile", () => {
//     fetchUserProfile(testUser.uid).then((user) => {
//       console.log(user);
//       expect(user).to.haveOwnProperty("uid");
//       expect(user).to.haveOwnProperty("displayName");
//       expect(user).to.haveOwnProperty("emailVerified");
//       expect(user).to.haveOwnProperty("photoURL");
//     });
//   });
// });
