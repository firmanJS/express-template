const { convertDate } = require('./custom')

/* eslint-disable no-undef */
describe('helpers custom testing ', () => {
  it('convertdate', () => {
    const getDate = convertDate({})
    expect(convertDate({})).toHaveProperty('createdAt', getDate.createdAt)
    expect(convertDate({})).toHaveProperty('updatedAt', getDate.updatedAt)
  })
})
