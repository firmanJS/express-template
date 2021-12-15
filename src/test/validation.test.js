/* eslint-disable global-require */
const httpMock = require('node-mocks-http')
const {
  convertDate,
} = require('../utils')

let req
let res

/* eslint-disable no-undef */
describe('utils custom testing ', () => {
  beforeEach(() => {
    // create express request and response mock
    req = httpMock.createRequest()
    res = httpMock.createResponse()
    next = jest.fn()
  })

  it('convertdate', () => {
    const getDate = convertDate({})
    expect(convertDate({})).toHaveProperty('createdAt', getDate.createdAt)
    expect(convertDate({})).toHaveProperty('updatedAt', getDate.updatedAt)
  })
})
