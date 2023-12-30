const jwt = require("jsonwebtoken");
const secret = process.env;

const generateToken = (id) => {
  const newToken = jwt.sign({ id }, secret.JWT_SECRET, {
    expiresIn: "7d",
  });
  console.log("Generated", newToken);
  return newToken;
};

module.exports = generateToken;
