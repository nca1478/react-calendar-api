const { Router } = require('express')
const { check } = require('express-validator')
const { validateJWT } = require('../middlewares/validateJwt')
const { routerErrors } = require('../middlewares/routerErrors')
const { isDate } = require('../helpers/isDate')
const router = Router()

// Controllers
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events')

// Middlewares
router.use(validateJWT)

// Rutas
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is not correct').custom(isDate),
    check('end', 'End date is not correct').custom(isDate),
    routerErrors,
  ],
  createEvent
)

router.get('/', getEvents)

router.put(
  '/:id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is not correct').custom(isDate),
    check('end', 'End date is not correct').custom(isDate),
    routerErrors,
  ],
  updateEvent
)

router.delete('/:id', deleteEvent)

module.exports = router
