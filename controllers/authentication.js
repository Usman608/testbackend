const authService = require("../services/authentication");
const { comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/jwt");
const httpStatusCodes = require("../constants/StatusCode");

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await authService.getUserByUsername({ userName });

    if (!user) {
      return res
        .status(httpStatusCodes.BAD_REQUEST)
        .json({ message: "Username is not valid." });
    }

    const validPassword = comparePassword(password, user.password);

    if (!validPassword) {
      return res
        .status(httpStatusCodes.BAD_REQUEST)
        .json({ message: "Password is not valid." });
    }

    const token = generateToken(user);
    user.refreshToken = token;
    await user.save();

    res.status(httpStatusCodes.CREATED).json({ token });
  } catch (err) {
    res
      .status(httpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Internal server error" });
  }
};
module.exports = {
  login,
};
