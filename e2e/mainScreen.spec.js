const { reloadApp } = require("detox-expo-helpers");

describe("MainScreen", () => {
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  beforeEach(async () => {
    // await device.reloadReactNative();
    await reloadApp();
    await timeout(3000); //I had to put this delay here because of an issue with detox and the expo library
    //the issue is described here: https://github.com/expo/with-detox-tests/issues/2

    await element(by.id("login_button")).tap();
  });

  it("should have a main screen", async () => {
    await expect(element(by.id("main_screen"))).toBeVisible();
  });

  it("should have a 'yes' button", async () => {
    await expect(element(by.id("yes_button"))).toBeVisible();
  });

  it("should have a 'no' button", async () => {
    await expect(element(by.id("no_button"))).toBeVisible();
  });

  it("should show permission text after pressing yes button", async () => {
    await element(by.id("yes_button")).tap();
    await expect(element(by.label("You are allowed to drink"))).toBeVisible();
  });

  it("should show permission text after pressing no button", async () => {
    await element(by.id("no_button")).tap();
    await expect(
      element(by.label("You are not allowed to drink"))
    ).toBeVisible();
  });

  // it("should select Orange from picker on iOS", async () => {
  //   await element(by.id("yes_button")).tap();
  //   await element(by.id("picker_button_ios")).tap();
  //   await element(by.id("picker")).setColumnToValue(0, "Apple");
  //   await expect(element(by.id("chosen_item_text"))).toHaveText("Orange");
  // });

  // it("should select Grape from picker on iOS", async () => {
  //   await element(by.id("yes_button")).tap();
  //   await element(by.id("picker_button_ios")).tap();
  //   await element(by.id("Grape")).tap();
  //   await expect(element(by.id("chosen_item_text"))).toHaveText("Grape");
  // });

  it("should show a picker", async () => {
    await element(by.id("yes_button")).tap();
    await element(by.id("picker_button_ios")).tap();
    await expect(element(by.type("UIPickerView"))).toBeVisible();
  });

  it("should Logout", async () => {
    await element(by.id("drawer_button")).tap();
    await element(by.id("logout_button")).tap();
    await expect(element(by.id("login_screen"))).toBeVisible();
  });
});

//device.getPlatform() === 'ios'
