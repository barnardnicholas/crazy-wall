const { userSignIn } = require("../api-ref");
const { expect } = require("chai");
const { testUser } = require("../../auth/firebase-auth");

describe("userSignIn", () => {
  it("signs in successfully", () => {
    userSignIn(testUser.email, testUser.password)
      .then((res) => {
        expect(res);
      })
      .catch((err) => {
        console.log(err.code);
      });
  });
});
