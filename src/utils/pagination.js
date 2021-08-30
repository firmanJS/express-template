const { LIMIT, PAGE, MONGO } = require('./constant')
/* eslint-disable no-restricted-syntax */
const jsonParse = (str) => {
  let parsing
  try {
    parsing = JSON.parse(str)
  } catch (e) {
    parsing = e
  }

  return parsing
}

const props = (strings) => {
  let value
  if (typeof strings === 'string' || strings instanceof String) {
    value = new RegExp(strings, 'i')
  } else {
    value = strings
  }
  return value
}

const extractSearch = (req) => {
  let search

  if (req.query.search) {
    const searching = jsonParse(req.query.search)
    const push = {}
    // eslint-disable-next-line guard-for-in
    for (const prop in searching) {
      push[prop] = props(searching[prop])
    }
    search = push
  } else {
    search = {}
  }

  return search
}

const paging = (req) => {
  let search
  try {
    search = extractSearch(req)
  } catch (error) {
    return error
  }
  const sort = (req.query.sort ? jsonParse(req.query.sort) : { _id: MONGO.SORT[1] })
  const where = (req.query.where ? jsonParse(req.query.where) : {})
  const page = +req.query.page || PAGE
  const limit = +req.query.limit || LIMIT

  return {
    search, sort, where, page, limit
  }
}

module.exports = {
  paging
}
