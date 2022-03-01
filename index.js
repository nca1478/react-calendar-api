const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))

// Routes
app.use('/api/auth', require('./routes/auth'))

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
