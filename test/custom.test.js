const httpMock = require('node-mocks-http')
const { convertDate, validateData } = require('../utils/custom')

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

  it('validate data', () => {
    // eslint-disable-next-line global-require
    const msg = require('../utils/exceptions')
    validateData(req, res, msg, 'world', {})
  })
})
