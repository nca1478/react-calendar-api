const { check } = require('express-validator')
const { routerErrors } = require('../middlewares/routerErrors')

const validateCreateUser = () => {
  return [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is not correct').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
    routerErrors,
  ]
}

const validateLoginUser = () => {
  return [
    check('email', 'Email is not correct').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
    routerErrors,
  ]
}

module.exports = { validateCreateUser, validateLoginUser }
