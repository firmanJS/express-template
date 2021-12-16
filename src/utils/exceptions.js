const { HTTP } = require('./constant')
const { captureException } = require('../config')

// class CustomHandler extends Error {
//   constructor(statusCode, message, status) {
//     super();
//     this.statusCode = statusCode
//     this.message = message
//     this.status = status
//   }
// }

const notFoundHandler = (req, res) => {
  const msg = `Route : ${req.url} Not found.`
  const err = new Error(msg)
  res.status(404).json({
    error: err.toString(),
    status: 404,
    msg,
  })
}

const removeFavicon = (req, res, next) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    res.end(/* icon content here */);
  } else {
    next();
  }
}

const errorHandler = (error, res) => {
  if (!error.statusCode) error.statusCode = 500
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.toString(),
    data: [],
  })

  captureException(error.toString())
}

const syntaxError = (err, req, res, next) => {
  const statusCode = err.status
  const result = {
    status: `syntax error ${err.type}`,
    message: `${err.toString()}`,
    data: `${err.toString()}`
  }

  if (process.env.NODE_ENV === 'development') {
    console.error(result);
  } else {
    // sent to sentry
  }

  if (err instanceof SyntaxError) {
    res.status(statusCode).send(result);
  } else {
    next();
  }
}

const paginationResponse = (req, res, data) => res.status(200).json({
  message: 'Get data successfull',
  status: 'success',
  data: data?.result || [],
  _links: req.baseUrl,
  _meta: {
    currentPage: 1,
    page: data?.page || 1,
    limitPerPage: data?.limit || 10,
    totalPages: data?.countPerPage || 1,
    countPerPage: data.result?.length || 10,
    countTotal: data?.count || 10
  }
})

const baseResponse = (res, message, status, data) => {
  let code
  switch (status) {
    case 'success':
      code = HTTP.OK
      break
    case 'created':
      code = HTTP.CREATED
      break
    case 'validation':
      code = HTTP.BAD_REQUEST
      break
    case 'not found':
      code = HTTP.NOT_FOUND
      break
    default:
      code = HTTP.OK
  }
  res.status(code).json({
    message,
    status,
    data
  })
}

const errorResponse = (res, error) => {
  const manipulate = error.toString().split(':')
  let message

  if (manipulate[0] === 'SequelizeConnectionRefusedError') {
    message = `${manipulate[0]}: Sequelize db is disconnected`
  } else {
    message = error.toString()
  }

  const response = {
    message,
    status: 'someting wrong',
    data: []
  }

  res.status(HTTP.BAD_REQUEST).json(response)
}

module.exports = {
  // CustomHandler,
  notFoundHandler,
  errorHandler,
  baseResponse,
  paginationResponse,
  errorResponse,
  removeFavicon,
  syntaxError
}
