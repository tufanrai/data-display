const express = require('express')
const router = require('../data-responding/router/rout.js') // accessing the router
const app = express()

app.use('/', router) // applying the router level req, res hanlding 

app.listen(8000, () => console.log('server started at http://localhost:8000'))