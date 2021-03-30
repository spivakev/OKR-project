const Router = require('express')
const router = new Router()
const treeController = require('../controllers/treeController')

router.post('/', treeController.create)
router.get('/:id', treeController.getOne)
router.get('/', treeController.getAll)
router.put('/', treeController.update)
router.delete('/:id', treeController.delete)

module.exports = router