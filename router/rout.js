const express = require('express')
const router = express.Router() // invoking router from express
const {homePage, user, userid, errHandler} = require('../router/controller/basicControll.js') // accessing the req res controller

router.get('/', homePage) // using homePage controller to the home page

router.get('/users', user) // using user controller to the users page

router.get('/users/:id', userid) // using userid controller to access the data with the help of id 

router.get('/*e', errHandler) // using errHandler controller to deal with the 404 errors

module.exports = router // exporting the router
