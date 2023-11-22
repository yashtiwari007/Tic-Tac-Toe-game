const User = require('../models/userModel')
const CONSTANTS = require('../utills/constants')
const bcrypt = require('bcryptjs')

const { StatusCodes } = require('http-status-codes')

module.exports = {
  login: async (req, res) => {
    const { userName, password } = req.body
    try {
      const user = await User.findOne({ userName })
      if (!user) {
        return res.status(StatusCodes.NOT_FOUND).send(CONSTANTS.MESSAGE.USER_NOT_FOUND)
      }
      if (user && (!await bcrypt.compare(password, user.password))) {
        return res.status(StatusCodes.UNAUTHORIZED).send(CONSTANTS.MESSAGE.INVALID_PASSWORD)
      } else {
        (user && (await bcrypt.compare(password, user.password)))
        return res.status(StatusCodes.OK).send(CONSTANTS.MESSAGE.LOGIN_SUCCESSFULLY)
      }
    } catch (error) {
      console.log(error)
    }
  },
  register: async (req, res) => {
    const { fullName, userName, email, password } = req.body
    try {
      const olduser = await User.findOne({ email })
      if (olduser) {
        return res.status(StatusCodes.CONFLICT).send(CONSTANTS.MESSAGE.EMAIL_EXIST)
      }

      const encryptedPassword = await bcrypt.hash(password, 10)

      const user = await User.create({
        fullName,
        userName,
        email: email.toLowerCase(),
        password: encryptedPassword
      })
      console.log('Hii', user)
      return res.status(StatusCodes.CREATED).send(CONSTANTS.MESSAGE.REGISTER_SUCCESS)
    } catch (error) {
      console.log(error)
    }
  }

}
