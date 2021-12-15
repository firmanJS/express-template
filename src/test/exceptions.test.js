const httpMock = require('node-mocks-http')
const {
  notFoundHandler, errorHandler
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
})
