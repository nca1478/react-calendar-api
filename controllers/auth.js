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

    return res.status(201).json({
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

const loginUser = async (req = request, res = response) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'User not found with that email',
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password not correct',
      })
    }

    res.status(201).json({ ok: true, user: { uid: user.id, name: user.name } })
  } catch (error) {
    console.log(error)
  }
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
