module.exports = (req, res, next, contract) => {
  for (const key of Object.keys(contract)) {
    const { error, value } = contract[key].validate(req[key])

    if (error) {
      return res.status(400).send(error.details)
    }

    req[key] = value
  }

  next()
}
