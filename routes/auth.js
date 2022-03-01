const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.json({
    ok: true,
    message: 'It works!!!',
  })
})

module.exports = router
