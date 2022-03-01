const { request, response } = require('express')

const createUser = (req = request, res = response) => {
  res.json({
    ok: true,
    message: 'User created',
  })
}

const loginUser = (req = request, res = response) => {
  res.json({
    ok: true,
    message: 'User Login',
  })
}

const renewToken = (req = request, res = response) => {
  res.json({
    ok: true,
    message: 'Renew token',
  })
}

module.exports = {
  createUser,
  loginUser,
  renewToken,
}
