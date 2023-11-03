require("dotenv").config();
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userData = {
      userName: process.env.ADMIN_USERNAME,
      password: process.env.ADMIN_PASSWORD,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await queryInterface.bulkInsert("Users", [userData]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
