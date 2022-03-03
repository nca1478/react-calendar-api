// Dependencias
const { response } = require('express')
const Event = require('../models/Event')

const createEvent = async (req, res = response) => {
  const event = new Event(req.body)

  try {
    event.user = req.uid
    const eventSaved = await event.save()

    res.json({
      ok: true,
      evento: eventSaved,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error creating event!',
    })
  }
}

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name')

  res.json({
    ok: true,
    events,
  })
}

const updateEvent = async (req, res = response) => {
  res.json({ ok: true, msg: 'update event' })
}

const deleteEvent = async (req, res = response) => {
  res.json({ ok: true, msg: 'delete event' })
}

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
}
