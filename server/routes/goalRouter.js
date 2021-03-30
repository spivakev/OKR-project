const Router = require('express')
const router = new Router()
const goalController = require('../controllers/goalController')

router.post('/', goalController.create)
router.get('/:id', goalController.getOne)
router.get('/', goalController.getAll)
router.put('/', goalController.update)
router.delete('/:id', goalController.delete)

module.exports = router