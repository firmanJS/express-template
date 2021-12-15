const { validationResult } = require('express-validator')
const { successResponse } = require('../utils')

const validateMiddleware = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return successResponse(res, 'Please provide required fields.', 'validation', errors.array())
  }

  return next()
}

module.exports = {
  validateMiddleware
}
