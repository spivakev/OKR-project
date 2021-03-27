const Router = require('express')
const router = new Router()
const companyRouter = require('./companyRouter')
const departmentRouter = require('./departmentRouter')
const goalRouter = require('./goalRouter')
const keyResultRouter = require('./keyResultRouter')
const keyResultValueRouter = require('./keyResultValueRouter')
const profileRouter = require('./profileRouter')
const treeRouter = require('./treeRouter')


router.use('/company', companyRouter)
router.use('/department', departmentRouter)
router.use('/goal', goalRouter)
router.use('/key-result', keyResultRouter)
router.use('/key-result-value', keyResultValueRouter)
router.use('/profile', profileRouter)
router.use('/tree', treeRouter)

module.exports = router