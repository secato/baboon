module.exports = (req, res, next) => {
  if (req.user.credits < 1) { return res.status(403).send("You don't have credits bro") }
  next()
}
