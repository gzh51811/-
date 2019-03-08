const express = require('express');
const {PORT} = require('./config.json');
var cRouter = require('./public/routers/c');
var zRouter = require('./public/routers/z');
var sRouter = require('./public/routers/s');
var gRouter = require('./public/routers/g');
var cusersRouter = require('./public/routers/cusers');
var zusersRouter = require('./public/routers/zusers');
var cfenleiRouter = require('./public/routers/cfenlei');
var logRouter = require('./public/routers/log');
var token_yzRouter = require('./public/routers/token_yz');
var zfenleiRouter = require('./public/routers/zfenlei');
var manydeleteRouter = require('./public/routers/manydelete');
var filesRouter = require('./public/routers/files');
// var mongodbRouter = require('./public/routers/mongodb');
 
const app = express();

app.use('/c',cRouter);
app.use('/z',zRouter);
app.use('/s',sRouter);
app.use('/g',gRouter);
app.use('/cusers',cusersRouter);
app.use('/cfenlei',cfenleiRouter);
app.use('/zusers',zusersRouter);
app.use('/log',logRouter);
app.use('/token_yz',token_yzRouter);
app.use('/zfenlei',zfenleiRouter);
app.use('/manydelete',manydeleteRouter);
app.use('/files',filesRouter);
// app.use('/mongodb',mongodbRouter);



app.use(express.static('./public/'));
app.listen(PORT,()=>{console.log('服务器启动%s',PORT)});