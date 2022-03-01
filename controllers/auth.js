const { request, response } = require('express')

const createUser = (req = request, res = response) => {
  const { name, email, password } = req.body

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      msg: 'Name must be at least 5 characters',
    })
  }

  res.status(201).json({
    ok: true,
    msg: 'User created',
    user: req.body,
  })
}

const loginUser = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'User Login',
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
