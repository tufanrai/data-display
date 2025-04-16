const database = require('/Users/tufan/Coding/Github-repo/data-responding/database/database.json')
const express = require('express')

const homePage = (req,res) => {
    res.send('this is home page')
}

const user = (req,res) => {
    res.send("find users with their ids'")
}

const userid = async(req,res) => {
    try{
        const usersId = parseInt(req.params.id)
        res.status(200).json(database.at(database.findIndex( obj => obj.id === usersId)))
    } catch (error) {
        console.log(error)
    }
}

const errHandler = (req,res) => {
    res.status(404).send('file not found')
}

module.exports = {
    homePage,
    user,
    userid,
    errHandler
}