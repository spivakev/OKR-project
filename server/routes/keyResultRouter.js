const Router = require('express')
const router = new Router()
const keyResultController = require('../controllers/keyResultController')

router.post('/', keyResultController.create)
router.get('/:id', keyResultController.getOne)
router.get('/', keyResultController.getAll)
router.put('/', keyResultController.update)
router.delete('/:id', keyResultController.delete)

module.exports = router