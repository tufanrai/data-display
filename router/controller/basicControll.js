const database = require('/Users/tufan/Coding/Github-repo/data-responding/database/database.json') // using a json object as a database <--Note:- this code was written before learning Db so i was json file as a database-->
const express = require('express')

const homePage = (req,res) => { // responce with a simple message to the request of the user
    res.send('this is home page') 
}

const user = (req,res) => { // responce with a simple message to the request of the user
    res.send("find users with their ids'")
}

const userid = async(req,res) => { // responces with the JSON string of the id that matches with the id requested by the user
    try{
        const usersId = parseInt(req.params.id)
        res.status(200).json(database.at(database.findIndex( obj => obj.id === usersId)))
    } catch (error) {
        console.log(error)
    }
}

const errHandler = (req,res) => { // sends a file not found message if the file or data is not found
    res.status(404).send('file not found')
}

module.exports = { // exporting all the request responce controller
    homePage,
    user,
    userid,
    errHandler
}