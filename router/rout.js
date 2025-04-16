const express = require('express')
const router = express.Router()
const {homePage, user, userid, errHandler} = require('../router/controller/basicControll.js')

router.get('/', homePage)

router.get('/users', user)

router.get('/users/:id', userid)

router.get('/*e', errHandler)

module.exports = router
