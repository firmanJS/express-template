const { Todo } = require('../../database/models')

const create = async (payload) => {
  const result = await Todo.create(payload)
  return result
}

module.exports = {
  create,
}
