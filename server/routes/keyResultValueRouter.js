const Router = require('express')
const router = new Router()
const keyResultValueController = require('../controllers/keyResultValueController')

router.post('/', keyResultValueController.create)
router.get('/:id', keyResultValueController.getOne)
router.get('/', keyResultValueController.getAll)
router.put('/', keyResultValueController.update)
router.delete('/:id', keyResultValueController.delete)

module.exports = router