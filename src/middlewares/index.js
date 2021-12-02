const { verifyJWTToken } = require("../services/jwt");

/**
 * Verify Token
 * @param req
 * @param res
 * @param next
 */
const verifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || authorization === "Bearer ") {
    res.sendStatus(400);
  } else {
    const token = authorization.replace("Bearer ", "");
    try {
      const decoded = verifyJWTToken(token);
      req.body.decoded = decoded;
      next();
    } catch (err) {
      console.log(err);
      res.status(401).send({
        error: err.message,
      });
    }
  }
};

module.exports = {
  verifyToken
}
