/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const cluster = require('cluster')
const os = require('os')
const app = require('./app')

require('dotenv').config()

let server

const exitHandler = () => {
  if (server) {
    server.close(() => {
      // eslint-disable-next-line no-console
      console.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error) => {
  // eslint-disable-next-line no-console
  console.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  // eslint-disable-next-line no-console
  console.info('SIGTERM received')
  if (server) {
    server.close()
  }
})

if (cluster.isMaster) {
  const cpuCore = os.cpus().length;
  for (let i = 0; i < cpuCore; i++) {
    cluster.fork();
  }
  cluster.on('online', (worker) => {
    if (worker.isConnected()) console.info(`worker is active ${worker.process.pid}`);
  });
  cluster.on('exit', (worker) => {
    if (worker.isDead()) console.info(`worker is dead ${worker.process.pid}`);
    cluster.fork();
  });
} else {
  app.listen(process.env.APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.info(`express boillerplate app running in port ${process.env.APP_PORT}`)
  })
}
