const Sentry = require('@sentry/node')
const Tracing = require('@sentry/tracing')

const initSentry = (app) => {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({
        app,
      }),
    ],
    tracesSampleRate: Number(process.env.SENTRY_TRACE_RATE),
  })

  return Sentry
}

const captureException = (err) => Sentry.captureException(err)

module.exports = {
  initSentry,
  captureException
}
