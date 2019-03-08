const express = require('express');
const Router = express.Router();
const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'student';
// Use connect method to connect to the server
Router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, client) {
        // console.log("Connected successfully to server");
        const db = client.db(dbName);
        var app = req.query;
        if (app.slei) {
            const collection = db.collection('spfenlei');
            let data = collection.find('slei').toArray((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    client.close();
                    console.log("slei");
                    res.send(result);
                }
            });
        }
        if(app.splei){
            const collection = db.collection('shopping');
            let data = collection.find({'slei':app.splei}).toArray((err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    client.close();
                    console.log("splei");
                    res.send(result);
                }
            });
        }
    });
});
module.exports = Router;