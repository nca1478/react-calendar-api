const { request, response } = require('express')

const createUser = (req = request, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'User created successfully',
    user: req.body,
  })
}

const loginUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'Login succesfully',
    user: req.body,
  })
}

const renewToken = (req = request, res = response) => {
  const token = 'as6d6asd88asd'
  res.json({
    ok: true,
    msg: 'Renew token',
    token,
  })
}

module.exports = {
  createUser,
  loginUser,
  renewToken,
}
