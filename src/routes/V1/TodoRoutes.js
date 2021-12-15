const express = require('express')
const { todoHandler } = require('../../handlers/V1')
const { postValidation } = require('../../middleware/validation/todo_validation')

const router = express.Router()

router.post('/', postValidation, todoHandler.store)

module.exports = router
