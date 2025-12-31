export const protectRoute = (req, res, next) => {
  const authInfo = typeof req.auth === "function" ? req.auth() : req.auth;

  if (!authInfo || !authInfo.userId) {
    return res
      .status(401)
      .json({ error: "Unauthorized - you must be logged in" });
  }

  next();
};
