const { check } = require('express-validator')
const { routerErrors } = require('../middlewares/routerErrors')
const { isDate } = require('../helpers/isDate')

const validateCreateEvent = () => {
  return [
    check('title', 'El título es requerido').not().isEmpty(),
    check('start', 'La fecha inicio no es correcta').custom(isDate),
    check('end', 'La fecha final no es correcta').custom(isDate),
    routerErrors,
  ]
}

module.exports = {
  validateCreateEvent,
}
