const httpMock = require('node-mocks-http')
const { paging } = require('../utils')

let req

/* eslint-disable no-undef */
describe('all utils testing', () => {
  beforeEach(() => {
    // create express request and response mock
    req = httpMock.createRequest()
    res = httpMock.createResponse()
    next = jest.fn()
  })

  it('pagination helpers', () => {
    const page = paging(req)
    expect(page).toHaveProperty('search')
    expect(page).toHaveProperty('sort')
    expect(page).toHaveProperty('page')
    expect(page).toHaveProperty('limit')
  })
})
