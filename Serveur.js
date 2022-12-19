const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const ProfilsRoute = require('./Routes/ProfilsRoute')

const app = express()

require('dotenv').config()

ConnectDB()

app.use(express.json())
app.use('/api/Profils',ProfilsRoute)

app.listen(process.env.port,console.log(`server is running on the port ${process.env.port}`))