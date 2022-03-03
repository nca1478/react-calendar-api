const { Router } = require('express')
const { validateJWT } = require('../helpers/validateJwt')
const router = Router()

// Controllers
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events')
const { route } = require('express/lib/application')

// Middlewares
router.use(validateJWT)

// Rutas
router.post('/', createEvent)
router.get('/', getEvents)
router.put('/:id', updateEvent)
router.delete('/:id', deleteEvent)

module.exports = router
