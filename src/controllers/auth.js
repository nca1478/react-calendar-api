const { response } = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { generateJWT } = require('../helpers/jwt')

const createUser = async (req, res = response) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo electrónico ya pertenece a otro usuario',
      })
    }

    user = new User(req.body)

    // Encrypt Password
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    const token = await generateJWT(user._id, user.name)

    return res.status(201).json({
      ok: true,
      msg: 'Usuario creado exitosamente',
      user: {
        uid: user._id,
        name: user.name,
      },
      token,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Por favor contacte al administrador',
    })
  }
}

const loginUser = async (req, res = response) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'Usuario no encontrado con ese correo electrónico',
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña no es correcta',
      })
    }

    const token = await generateJWT(user._id, user.name)

    res
      .status(201)
      .json({ ok: true, user: { uid: user.id, name: user.name }, token })
  } catch (error) {
    console.log(error)
  }
}

const renewToken = async (req, res = response) => {
  const { uid, name } = req
  const token = await generateJWT(uid, name)

  res.json({ ok: true, user: { uid, name }, token })
}

module.exports = {
  createUser,
  loginUser,
  renewToken,
}
