const { validationResult } = require('express-validator')
const { baseResponse } = require('../utils')
const { lang } = require('../lang')

const validateMiddleware = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return baseResponse(res, lang.__('validator'), lang.__('validation'), errors.array())
  }

  return next()
}

module.exports = {
  validateMiddleware
}
