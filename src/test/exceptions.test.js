const httpMock = require('node-mocks-http')
const {
  notFoundHandler, errorHandler, getResponse, successResponse, customResponse,
  errorResponse, notFoundResponse
} = require('../utils')

let req
let res

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

  it('utils custom message for pagination', () => {
    getResponse(req, res, [])
  })

  it('utils custom message for succes response', () => {
    successResponse(res, [], [])
  })

  it('utils custom message for custom response', () => {
    customResponse(res, 200, '', [])
  })

  it('utils custom message for error response', () => {
    errorResponse(res, '', 500)
  })

  it('utils custom message for notfound response', () => {
    notFoundResponse(res)
  })
})
