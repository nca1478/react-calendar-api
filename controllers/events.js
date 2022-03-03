// Dependencias
const { response } = require('express')

const createEvent = async (req, res = response) => {
  res.json({ ok: true, msg: 'create event' })
}

const getEvents = async (req, res = response) => {
  res.json({ ok: true, msg: 'get events' })
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
