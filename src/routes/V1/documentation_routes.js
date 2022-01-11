/* eslint-disable global-require */
const swaggerUi = require('swagger-ui-express')
const express = require('express')
const { baseResponse } = require('../../utils')
const { index } = require('../../static')

const router = express.Router()

router.use('/documentation', swaggerUi.serve)
router.get('/documentation', swaggerUi.setup(index))
router.get('/', (req, res) => {
  baseResponse(res, 'Api running', 'allive', {
    welcome: 'Welcome to Boilerplate API.',
    // hostname: require('os').hostname(),
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
