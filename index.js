const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'It works!!!',
  })
})

app.listen(4000, () => {
  console.log(`Server on port ${4000}`)
})
