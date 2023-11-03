const { User } = require("../models");

const getUserByUsername = async ({ userName }) => {
  const user = await User.findOne({
    where: {
      username: userName,
    },
  });
  return user;
};

module.exports = {
  getUserByUsername,
};
