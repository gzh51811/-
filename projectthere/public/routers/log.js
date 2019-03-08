const express = require('express');
const Router = express.Router();
const MongoClient = require('mongodb').MongoClient;
var token = require("../token/token.js");
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'student';
// Use connect method to connect to the server
Router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, client) {
        // console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('student');
        var app = req.query;
        let data = collection.find({ "pass": app.pass, "word": app.word }).toArray((err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length === 1) {
                    let crypto = token.createToken(result[0], 11111111111111);
                    console.log(result[0]);
                    res.send({ 'status': true, 'token': crypto });
                } else {
                    res.send({ 'status': false });
                }
            }
        });
    });
});
module.exports = Router;