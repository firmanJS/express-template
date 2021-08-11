import express from 'express'

import cors from 'cors'
import compress from 'compression'
import methodOverride from 'method-override'
import helmet from 'helmet'
import xss from 'xss-clean'
import morgan from 'morgan'
import Sentry from '@sentry/node'
import Tracing from '@sentry/tracing'
import dotenv from 'dotenv'
import { notFoundHandler, errorHandler } from './utils/exceptions.js'
import { MORGAN_FORMAT } from './utils/constant.js'
import routing from './routes/index.js'

const app = express()

dotenv.config()

app.use(compress()) // gzip compression
app.use(methodOverride()) // lets you use HTTP verbs
app.use(helmet()) // secure apps by setting various HTTP headers
app.use(cors()) // enable cors
app.options('*', cors()) // cors setup
app.use(express.json({ limit: '200kb' })) // json limit

const morganFormat = MORGAN_FORMAT
app.use(morgan(morganFormat, { stream: process.stderr }))
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({
      // to trace all requests to the default router
      app,
    }),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: Number(process.env.SENTRY_TRACE_RATE),
});
// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
// the rest of your app
app.use(Sentry.Handlers.errorHandler());
// remove favicon
app.get('/favicon.ico', (_req, res) => {
  res.status(204)
  res.end()
})
app.use(xss()) // handler xss attack
app.use(routing) // routing
app.use(notFoundHandler) // 404 handler
app.use(errorHandler) // error handlerr

export default app
