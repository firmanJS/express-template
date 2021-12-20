const sequelize = require('sequelize')
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
    lock: sequelize.Transaction.LOCK.UPDATE,
  })

  return result
}

const update = async (payload, where) => {
  const result = await Todo.update(
    payload, {
      where,
      returning: true,
      plain: false
    }
  )

  return result
}

const hardDelete = async (where) => {
  const result = await Todo.destroy({ where })

  return result
}

module.exports = {
  create,
  read,
  update,
  readByParam,
  hardDelete
}
