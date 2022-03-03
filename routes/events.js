const { Router } = require('express')
const { validateJWT } = require('../middlewares/validateJwt')
const router = Router()

// Controllers
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events')
const { validateCreateEvent } = require('../middlewares/validateEvent')

// Middlewares
router.use(validateJWT)

// Routes
router.post('/', validateCreateEvent(), createEvent)
router.get('/', getEvents)
router.put('/:id', validateCreateEvent(), updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router
