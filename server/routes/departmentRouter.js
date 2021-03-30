const Router = require('express')
const router = new Router()
const departmentController = require('../controllers/departmentController')

router.post('/', departmentController.create)
router.get('/:id', departmentController.getOne)
router.get('/', departmentController.getAll)
router.put('/', departmentController.update)
router.delete('/:id', departmentController.delete)

module.exports = router