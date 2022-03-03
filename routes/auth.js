const { Router } = require('express')
const { check } = require('express-validator')
const { routerErrors } = require('../middlewares/routerErrors')
const { validateJWT } = require('../helpers/validateJwt')
const router = Router()

// Controllers
const { createUser, loginUser, renewToken } = require('../controllers/auth')

// Routes
router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not correct').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
    routerErrors,
  ],
  createUser
)

router.post(
  '/login',
  [
    check('email', 'Email is not correct').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
    routerErrors,
  ],
  loginUser
)

router.get('/renew', validateJWT, renewToken)

module.exports = router
