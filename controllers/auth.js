const { request, response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const createUser = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Email already belongs to another user',
      })
    }

    user = new User(req.body)

    // Encrypt Password
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    res.status(201).json({
      ok: true,
      msg: 'User created successfully',
      user: {
        uid: user._id,
        name: user.name,
      },
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Please contact administrator',
    })
  }
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
