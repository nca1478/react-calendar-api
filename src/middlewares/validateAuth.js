const { check } = require('express-validator')
const { routerErrors } = require('../middlewares/routerErrors')

const validateCreateUser = () => {
  return [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El email no es correcto').isEmail(),
    check(
      'password',
      'La contraseña debe tener al menos 6 caracteres'
    ).isLength({
      min: 6,
    }),
    routerErrors,
  ]
}

const validateLoginUser = () => {
  return [
    check('email', 'El email no es correcto').isEmail(),
    check('password', 'La contraseña es requerida').not().isEmpty(),
    routerErrors,
  ]
}

module.exports = { validateCreateUser, validateLoginUser }
