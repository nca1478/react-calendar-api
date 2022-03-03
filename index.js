require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./database/config')

const app = express()
const PORT = process.env.PORT

// DB Connection
dbConnection()

// Middlewares
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
