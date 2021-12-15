const { check } = require('express-validator')
const { validateMiddleware } = require('../index')

const postValidation = [
  check('name').isString().not().isEmpty()
    .withMessage('required value'),
  check('description').isString().not().isEmpty()
    .withMessage('required value'),
  (req, res, next) => { validateMiddleware(req, res, next) }
]
module.exports = { postValidation }
