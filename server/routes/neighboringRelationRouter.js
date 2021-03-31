const Router = require('express')
const router = new Router()
const neighboringRelationController = require('../controllers/neighboringRelationController')

router.post('/', neighboringRelationController.create)
router.get('/:id', neighboringRelationController.getOne)
router.get('/', neighboringRelationController.getAll)
router.put('/', neighboringRelationController.update)
router.delete('/:id', neighboringRelationController.delete)

module.exports = router