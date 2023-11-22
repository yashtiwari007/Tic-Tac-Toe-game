require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to database successfully...')
  })
  .catch((error) => {
    console.log('Cannot connect to database', error)
  })

  