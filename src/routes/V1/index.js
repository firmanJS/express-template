const express = require('express')

const routing = express()
const { API_PATH } = require('../../utils')
const index = require('./DocumentationRoutes')
const todo = require('./TodoRoutes')

routing.use(`${API_PATH}/`, index)
routing.use(`${API_PATH}/todo`, todo)
module.exports = routing
