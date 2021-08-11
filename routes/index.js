import express from 'express'

const routing = express()

import index from './DocumentationRoutes.js'

routing.use(index)

export default routing
