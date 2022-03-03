const { check } = require('express-validator')
const { routerErrors } = require('../middlewares/routerErrors')
const { isDate } = require('../helpers/isDate')

const validateCreateEvent = () => {
  return [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is not correct').custom(isDate),
    check('end', 'End date is not correct').custom(isDate),
    routerErrors,
  ]
}

module.exports = {
  validateCreateEvent,
}
