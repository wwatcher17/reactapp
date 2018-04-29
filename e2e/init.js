const detox = require("detox");
const config = require("../package.json").detox;

before(async () => {
  try {
    await detox.init(config);
  } catch (err) {
    console.log(err);
    throw err;
  }
});

after(async () => {
  await detox.cleanup();
});
