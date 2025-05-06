const express = require('express')
const cors = require('cors')
const loadRoutes = require('../config/loadRoutes')
const mongoose = require('./infra/database/mongo/index')

require('module-alias/register')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(3001, async () => {
  const router = loadRoutes()
  app.use(router)
  await mongoose.connect()
  console.log('Server running on localhost:3001')
})
