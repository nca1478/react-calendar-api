const { Router } = require('express')
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const { check } = require('express-validator')
const { routerErrors } = require('../middlewares/routerErrors')
const router = Router()

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
  '/',
  [
    check('email', 'Email is not correct').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
    routerErrors,
  ],
  loginUser
)

router.get('/renew', renewToken)

module.exports = router
