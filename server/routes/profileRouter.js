const Router = require('express')
const router = new Router()
const profileController = require('../controllers/profileController')

router.post('/registration', profileController.registration)
router.post('/login', profileController.login)
router.get('/auth', profileController.check)

router.get('/:id', profileController.getOne)
router.get('/', profileController.getAll)
router.put('/', profileController.update)
router.delete('/:id', profileController.delete)

module.exports = router