const express = require('express')

const routing = express()
const index = require('./DocumentationRoutes')

routing.use(index)
module.exports = routing
