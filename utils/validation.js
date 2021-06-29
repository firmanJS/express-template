const { validationResult } = require('express-validator')

const resultValidation = (request) => {
  const errValidation = validationResult(request)
  if (!errValidation.isEmpty()) {
    return errValidation
  }
  return 0
}

const countValidation = (req, res, data, msg) => {
  if (data.count > 0) {
    return msg.getResponse(req, res, data)
  }

  return msg.notFoundResponse(res)
}

module.exports = {
  resultValidation, countValidation
}
