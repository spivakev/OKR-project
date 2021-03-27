const ApiError = require('../error/apiError')

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message })
  }
  return res.status(500).jon({message: "Непредвиденная ошибка!"})
  // вызов next передаст управление след. в цепочке middleware
}