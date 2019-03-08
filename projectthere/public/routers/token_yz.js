var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var token = require("../token/token.js");
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'student';
// Use connect method to connect to the server
router.get('/', function (req, res, next) {
  MongoClient.connect(url, function (err, client) {
    // console.log("Connected successfully to server111");
    const db = client.db(dbName);
    const collection = db.collection('student');
    let crypto = req.query.token;
    // console.log(token.decodeToken(crypto).payload.data);
        if(token.checkToken(crypto)) {
          console.log(token.checkToken(crypto));
          res.send({ 'status': true,'name':token.decodeToken(crypto).payload.data.name });
        }else{
          res.send({ 'status': false });
        }
      });
    });
module.exports = router;