const express = require('express')
const router = require('../data-responding/router/rout.js')
const app = express()

app.use('/', router)

app.listen(8000, () => console.log('server started at http://localhost:8000'))