require('dotenv').config()
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('combined'))
app.use(morgan('dev'))
app.use(compression())

require('./config/dbConnect')

const router = require('./routes/indexRoutes')

app.use('/api/v1', router)
// app.use('/', router)

const PORT = process.env.API_PORT

app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`> Ready on PORT:${PORT}`)
})
