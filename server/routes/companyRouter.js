const Router = require('express')
const router = new Router()
const companyController = require('../controllers/companyController')

router.post('/', companyController.create)
router.get('/:id', companyController.getOne)
router.get('/', companyController.getAll)
router.put('/', companyController.update)
router.delete('/:id', companyController.delete)

module.exports = router