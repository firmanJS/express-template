const httpMock = require('node-mocks-http')
const {
  notFoundHandler, errorHandler, removeFavicon, syntaxError,
  paginationResponse, baseResponse, errorResponse
} = require('../utils')

let req
let res
let next

/* eslint-disable no-undef */
describe('all utils testing ', () => {
  beforeEach(() => {
    // create express request and response mock
    req = httpMock.createRequest()
    res = httpMock.createResponse()
    next = jest.fn()
  })

  it('utils custom message not found', () => {
    notFoundHandler(req, res)
  })

  it('utils custom message error handler', () => {
    errorHandler('', res)
  })

  it('remove favicon handler', () => {
    removeFavicon(req, res, next)
  })

  it('syntax error handler', () => {
    syntaxError([], req, res, next)
  })

  it('pagination handler', () => {
    paginationResponse(req, res, [])
  })

  it('base response handler', () => {
    baseResponse(res, '', '', [])
  })

  it('error repsonse handler', () => {
    errorResponse(res, [])
  })
})
