module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: "Ah ah ah, you didn't say the magic word" })
  }

  next()
}
