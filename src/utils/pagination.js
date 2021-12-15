const { LIMIT, PAGE, MONGO } = require('./constant')

const jsonParse = (str) => {
  let parsing
  try {
    parsing = JSON.parse(str)
  } catch (e) {
    parsing = e
  }

  return parsing
}

const paging = (req) => {
  const sort = (req.query.sort ? jsonParse(req.query.sort) : { _id: MONGO.SORT[1] })
  const page = +req.query.page || PAGE
  const limit = +req.query.limit || LIMIT

  return {
    sort, page, limit
  }
}

module.exports = {
  paging
}
