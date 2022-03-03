const { Router } = require('express')
const { validateJWT } = require('../middlewares/validateJwt')
const router = Router()

// Controllers
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const {
  validateCreateUser,
  validateLoginUser,
} = require('../middlewares/validateAuth')

// Routes
router.post('/new', validateCreateUser(), createUser)
router.post('/login', validateLoginUser(), loginUser)
router.get('/renew', validateJWT, renewToken)

module.exports = router
