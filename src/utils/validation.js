const { validationResult } = require('express-validator')

const resultValidation = (request) => {
  const errValidation = validationResult(request)
  let result
  if (!errValidation.isEmpty()) {
    result = errValidation
  } else {
    result = 0
  }
  return result
}

const countValidation = (req, res, data, msg) => {
  let message
  if (data.count > 0) {
    message = msg.getResponse(req, res, data)
  } else {
    message = msg.notFoundResponse(res)
  }

  return message
}

module.exports = {
  resultValidation, countValidation
}
