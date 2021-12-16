const express = require('express')

const routing = express()
const { API_V1 } = require('../../utils')
const index = require('./documentation_routes')
const todo = require('./todo_routes')

routing.use(`${API_V1}/`, index)
routing.use(`${API_V1}/todo`, todo)
module.exports = routing
