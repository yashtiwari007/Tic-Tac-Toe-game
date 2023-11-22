const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  fullName: {
    type: String
  },
  userName: {
    type: String, unique: true
  },
  email: {
    type: String, default: null, unique: true
  },
  password: {
    type: String, default: null
  },
  token: {
    type: String,
    default: 0
  }
})

module.exports = mongoose.model('Users', UserSchema)
