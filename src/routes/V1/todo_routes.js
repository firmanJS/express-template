const express = require('express')
const { store, show, showByParam } = require('../../handlers/V1/todo')
const { postValidation } = require('../../handlers/V1/todo/validation')

const router = express.Router()

router.post('/', postValidation, store)
router.get('/', show)
router.get('/:id', showByParam)

module.exports = router
