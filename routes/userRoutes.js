const userController = require('../controller/userController')
const router = require('express').Router()

router.get('/')

/**
 * @swagger
 * /login:
 *   post:
 *     description: User login to application
 *     security:
 *     - Basic: []
 *     tags:
 *     - Users
 *     parameters:
 *       - name: email
 *         description: email of the new user
 *         required: true
 *         in: formData
 *         type: string
 *       - name: password
 *         description: Password of the new user
 *         required: true
 *         in: formData
 *         type: string
 *     responses:
 *       200:
 *         description: Register User in the application
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *               example: true
 *           message:
 *             type: string
 *             example: 'Success'
 *       422:
 *         description: Unprocessable entity
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *               example: false
 *           message:
 *             type: string
 *             example: email already exists
 */
router.post('/login', userController.login)

/**
 * @swagger
 * /register:
 *   post:
 *     description: User registration in application
 *     security:
 *     - Basic: []
 *     tags:
 *     - Users
 *     parameters:
 *       - name: fullName
 *         description: Full name of the new user
 *         required: true
 *         in: formData
 *         type: string
 *         example: Json
 *       - name: userName
 *         description: User name of the new user
 *         required: true
 *         in: formData
 *         type: string
 *         example: Frye
 *       - name: email
 *         description: email of the new user
 *         required: true
 *         in: formData
 *         type: string
 *         example: 'xyz@abc.com'
 *       - name: password
 *         description: Password of the new user
 *         required: true
 *         in: formData
 *         type: string
 *         example: Abc@123456
 *     responses:
 *       200:
 *         description: Register User in the application
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *               example: true
 *             message:
 *               type: string
 *               example: 'Success'
 *       422:
 *         description: Unprocessable entity
 *         schema:
 *           type: object
 *           properties:
 *             status:
 *               type: boolean
 *               example: false
 *             message:
 *               type: string
 *               example: email already exists
 */
router.post('/register', userController.register)

module.exports = router
