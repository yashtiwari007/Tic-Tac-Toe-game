const router = require('express').Router({ mergeParams: true })
const userRoutes = require('./userRoutes')
const swaggerUI = require('swagger-ui-express')
const swaggerConfig = require('../config/swagger')

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig))
router.use('/user', userRoutes)

module.exports = router
