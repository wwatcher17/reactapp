// const { reloadApp } = require("detox-expo-helpers");

describe("LoginScreen", () => {
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  beforeEach(async () => {
    await device.reloadReactNative();
    // await reloadApp();
    // await timeout(4000); //I had to put this delay here because of an issue with detox and the expo library
    //the issue is described here: https://github.com/expo/with-detox-tests/issues/2
  });

  it("should have a login screen", async () => {
    await expect(element(by.id("login_screen"))).toBeVisible();
  });

  it("should show reactApp on the login screen", async () => {
    await expect(element(by.id("title"))).toBeVisible();
  });

  it("should have an email field on the login screen", async () => {
    await expect(element(by.id("email_field"))).toBeVisible();
  });

  it("should have a password field on the login screen", async () => {
    await expect(element(by.id("password_field"))).toBeVisible();
  });

  it("should have a login button on the login screen", async () => {
    await expect(element(by.id("login_button"))).toBeVisible();
  });

  it("should have a sign up text on the login screen", async () => {
    await expect(element(by.id("sign_up_text"))).toBeVisible();
  });
});
