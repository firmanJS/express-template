const { v4: uuidv4 } = require('uuid')
const repository = require('../../../repository/postgresql')
const {
  baseResponse, errorResponse, paginationResponse, dynamicFilter
} = require('../../../utils')

const store = async (req, res) => {
  const payload = req.body
  payload.id = uuidv4()

  try {
    const result = await repository.todoPostgres.create(payload)
    baseResponse(res, 'created', 'created', result)
  } catch (error) {
    errorResponse(res, error)
  }
}

const show = async (req, res) => {
  try {
    const where = dynamicFilter(req.query, 'or')
    const result = await repository.todoPostgres.read(where)
    return paginationResponse(req, res, result)
  } catch (error) {
    return errorResponse(res, error)
  }
}

const showByParam = async (req, res) => {
  try {
    const where = {
      id: req?.params?.id
    }
    const result = await repository.todoPostgres.readByParam(where)
    if (result) {
      return baseResponse(res, 'get data successfully', 'success', result)
    }
    return baseResponse(res, 'not found', 'not found', result)
  } catch (error) {
    return errorResponse(res, error)
  }
}

module.exports = {
  store,
  show,
  showByParam
}
