const swaggerUi = require('swagger-ui-express')
const express = require('express')
const { API_PATH } = require('../utils/constant')
const { customResponse } = require('../utils/exceptions')
const { index } = require('../static')

const router = express.Router()

router.use(`${API_PATH}/documentation`, swaggerUi.serve)
router.get(`${API_PATH}/documentation`, swaggerUi.setup(index))
router.get('/', (req, res) => {
  customResponse(res, 200, 'Api running', {
    welcome: 'Welcome to Boilerplate API.',
    hostname: require('os').hostname(),
    uptime: require('os').uptime(),
    loadavg: require('os').loadavg(),
    totalmem: require('os').totalmem(),
    version: require('os').version(),
    platform: require('os').platform(),
    release: require('os').release(),
    documentation: `http://${req.get('host')}/api/v1/documentation`,
  })
})
module.exports = router
