const { response } = require('express')
const Event = require('../models/Event')

const createEvent = async (req, res = response) => {
  const event = new Event(req.body)

  try {
    event.user = req.uid
    const eventSaved = await event.save()

    res.json({
      ok: true,
      event: eventSaved,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error creando el evento',
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
  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no encontrado',
      })
    }

    // Validate that user can change their data
    if (event.user.toString() !== uid) {
      return res.status(400).json({
        ok: false,
        msg: 'No puedes cambiar este evento',
      })
    }

    const newEvent = {
      ...req.body,
      user: uid,
    }

    const eventUpdated = await Event.findByIdAndUpdate(
      eventId,
      newEvent,
      { new: true } // Show event updated on the response
    )

    res.json({
      ok: true,
      event: eventUpdated,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error actualizando el evento',
    })
  }
}

const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id
  const uid = req.uid

  try {
    const event = await Event.findById(eventId)
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Evento no encontrado',
      })
    }

    if (event.user.toString() !== uid) {
      return res.status(400).json({
        ok: false,
        msg: 'No puedes cambiar este evento',
      })
    }

    await Event.findByIdAndDelete(eventId)
    res.json({
      ok: true,
      msg: 'Evento borrado exitosamente',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Error borrando el evento',
    })
  }
}

module.exports = {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
}
