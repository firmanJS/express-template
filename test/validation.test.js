/* eslint-disable global-require */
const httpMock = require('node-mocks-http')
const {
  convertDate, validateData, resultValidation, countValidation
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

  it('validate data', () => {
    // eslint-disable-next-line global-require
    const msg = require('../utils/exceptions')
    validateData(req, res, msg, 'world', { data: 'a' })
  })

  it('validate resultt', () => {
    resultValidation(req)
  })

  it('coun result', () => {
    const msg = require('../utils/exceptions')
    countValidation(req, res, [], msg)
  })
})
