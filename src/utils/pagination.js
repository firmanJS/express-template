/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const { Op } = require('sequelize')
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

const dynamicFilter = (obj, name) => {
  const where = {}
  const push = {}

  if (Object.keys(obj).length > 0) {
    for (const prop in obj) {
      push[prop] = { [Op.iLike]: `%${obj[prop]}%` }
    }

    where[Op[name]] = push

    return where
  }
  return push
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
  paging,
  dynamicFilter
}
