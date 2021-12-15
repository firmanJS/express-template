const { v4: uuidv4 } = require('uuid')
const repository = require('../../repository/postgresql')
const { successResponse, errorResponse } = require('../../utils')

const store = async (req, res) => {
  const payload = req.body
  payload.id = uuidv4()

  try {
    const result = await repository.todoPostgres.create(payload)
    successResponse(res, 'created', 'created', result)
  } catch (error) {
    errorResponse(res, error)
  }
}

module.exports = {
  store
}
