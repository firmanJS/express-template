const httpMock = require('node-mocks-http')
const { paging, dynamicFilter } = require('../utils/pagination')

let req

/* eslint-disable no-undef */
describe('utils custom testing ', () => {
  beforeEach(() => {
    // create express request and response mock
    req = httpMock.createRequest()
  })

  it('paging', () => {
    paging(req)
  })

  it('dynamicFilter', () => {
    dynamicFilter({}, 'and')
  })
})
