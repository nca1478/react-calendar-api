const moment = require('moment')

const isDate = (value, { req, location, path }) => {
  if (!value) {
    return false
  }

  const dataFromRequest = moment(value)
  if (dataFromRequest.isValid()) {
    return true
  } else {
    return false
  }
}

module.exports = { isDate }
