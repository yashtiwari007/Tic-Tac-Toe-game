const swaggerJsDocs = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TIC-TAC-TOE',
      version: '1.0.0',
      description: 'A simple Node.JS gaming application'
    },
    servers: [
      {
        url: 'http://localhost:8000'
      }
    ]
  },
  apis: ['./routes/*.js']
}

module.exports = swaggerJsDocs(options)
