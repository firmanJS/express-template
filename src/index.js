const cluster = require('cluster')
const os = require('os')
const app = require('./app')

require('dotenv').config()

let server

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.info('Server closed')
      process.exit(1)
    })
  } else {
    process.exit(1)
  }
}

const unexpectedErrorHandler = (error) => {
  console.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  console.info('SIGTERM received')
  if (server) {
    server.close()
  }
})

if (process.env.CLUSTER_MODE === 'on' && cluster.isMaster) {
  const cpuCore = os.cpus().length;
  for (let i = 0; i < cpuCore; i += 1) {
    cluster.fork();
  }
  cluster.on('online', (worker) => {
    if (worker.isConnected()) console.info(`worker is active ${worker.process.pid}`);
  })
  cluster.on('exit', (worker) => {
    if (worker.isDead()) console.info(`worker is dead ${worker.process.pid}`);
    cluster.fork();
  })
} else {
  app.listen(process.env.PORT, () => {
    console.info(`express boillerplate app running in port ${process.env.PORT}`)
  })
}
