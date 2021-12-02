const jwt = require("jsonwebtoken");
const secret = "JwT_SeCREt1";
/**
 * Generate JWT Token
 * @param tokenData
 */
const generateJWTToken = (tokenData, exp) =>
  jwt.sign(tokenData, secret, { expiresIn: exp });
/**
 * Verify JWT Token
 * @param string
 */
const verifyJWTToken = (token) => jwt.verify(token, secret);

module.exports = {
  generateJWTToken,
  verifyJWTToken
}
