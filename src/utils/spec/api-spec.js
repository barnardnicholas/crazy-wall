const { firebase, database, userSignIn } = require("../api");
const { expect } = require("chai");
const { testUser } = require("../../auth/firebase-auth");

describe("userSignIn", () => {
  it("signs in successfully", () => {
    userSignIn(testUser.email, testUser.password)
      .then((res) => {
        expect(res);
        // Successful sign in - commence happy tests
      })
      .catch((err) => {
        console.log(err.code);
      });
  });
});
