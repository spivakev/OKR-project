const Router = require('express')
const router = new Router()
const profileController = require('../controllers/profile.controller')

router.post('/profile', profileController.createProfile)
router.get('/profile/:id', profileController.getOneProfile)
router.get('/profile', profileController.getProfiles)
router.put('/profile', profileController.updateProfile) 
router.delete('/profile/:id', profileController.deleteProfile)

module.exports = router