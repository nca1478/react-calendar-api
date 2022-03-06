const mongoose = require('mongoose')

const dbConnection = async () => {
  const CONN =
    process.env.NODE_ENV === 'development'
      ? process.env.DB_CONNECTION_DEV
      : process.env.DB_CONNECTION_PROD

  try {
    await mongoose.connect(CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log('DB Online')
  } catch (error) {
    console.log(error)
    throw new Error('Error Starting Database')
  }
}

module.exports = { dbConnection }
