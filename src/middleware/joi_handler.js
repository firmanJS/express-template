const { errorResponse } = require('../utils/exceptions')

// schema options
const options = {
  abortEarly: true, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true // remove unknown props
};

const joiResult = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property], options)
  const valid = error == null
  if (valid) {
    next()
  } else {
    const { details } = error
    const message = details.map((i) => i.message).join(',')
    errorResponse(res, message, 422)
  }
}

module.exports = { joiResult }
