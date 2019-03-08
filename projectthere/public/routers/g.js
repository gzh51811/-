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
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        var appg = req.query;
        if(appg.status){
            const collection = db.collection(appg.status);
        //获取前端发送的数
        console.log(appg,666);
        collection.updateOne({ "_id": ObjectID(appg._id) }, {
            $set: {
                'name': appg.name,
                'gender': appg.gender,
                'pass': appg.pass,
                'word': appg.word
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                client.close();
                console.log('修改成功,student');
                res.send(true);
            }
        });
        }else{
            const collection = db.collection('shopping');
        //获取前端发送的数
        console.log(appg);
        collection.updateOne({ "_id": ObjectID(appg._id) }, {
            $set: {
                'sname': appg.sname,
                'smoneys': appg.smoneys,
                'smoneyx': appg.smoneyx,
                'slei': appg.slei
            }
        }, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                client.close();
                console.log('修改成功,shopping');
                res.send(true);
            }
        });
        }
        
    });
});
module.exports = Router;