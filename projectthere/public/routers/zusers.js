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
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        const collection = db.collection('student');
        //获取前端发送的数据
        var app = req.query;
        console.log(app);
        collection.insertOne({ "name":app.name,"gender":app.gender,"pass":app.pass,"word":app.word,"city":app.city,"time":Date.now()}, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                client.close();
                console.log('zusers');
                res.send(true);
            }
        });
    });
});
module.exports = Router;