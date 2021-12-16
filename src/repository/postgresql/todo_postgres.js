const { Todo } = require('../../database/models')

const create = async (payload) => {
  const result = await Todo.create(payload)
  return result
}

const read = async (where) => {
  const result = await Todo.findAndCountAll({
    where,
  })

  return {
    result: result?.rows,
    count: result?.count
  }
}

const readByParam = async (where) => {
  const result = await Todo.findOne({
    where,
  })

  return result
}

module.exports = {
  create,
  read,
  readByParam
}
