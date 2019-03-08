const express = require('express');
const Router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
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
        if (app._id) {
            let data = collection.find({ "_id": ObjectID(app._id) }).toArray((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    client.close();
                    console.log("cusers_id");
                    res.send(result);
                }
            });
        } else {
            let data = collection.find('student').toArray((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    client.close();
                    console.log("cusers");
                    res.send(result);
                }
            });
        }

    });
});
module.exports = Router;