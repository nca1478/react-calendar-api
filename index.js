const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'It works!!!',
  })
})

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
