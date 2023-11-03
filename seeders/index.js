const userSeeder = require("./user")(async () => {
    try {
      await userSeeder.up();
    } catch (e) {
      console.error("Error: ", e.message);
    }
  })();
  