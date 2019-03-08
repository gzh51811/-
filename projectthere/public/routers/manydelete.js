const express = require('express');
const Router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
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
        // console.log(app);
        let arr = [];
        for(item in app){
            arr.push(ObjectID(app[item]))
            arr.push({'_id':ObjectID(app[item])})
            // console.log(app[item]);
        }
        console.log(arr,666);


        const collection = db.collection('shopping');
        collection.deleteMany({_id:{$in:arr}}, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('删除成功');
                client.close();
                res.send('true');
            }
        });
    });
});
module.exports = Router;