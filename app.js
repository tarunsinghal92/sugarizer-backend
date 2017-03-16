//require files need for server to work
var express = require('express'),
    fs = require('fs'),
    moment = require('moment'),
    ejs = require('ejs'),
    request = require('request'),
    app = express();

//varialbes.inc file
var cfs = JSON.parse(fs.readFileSync('./env.json'));

//create req. variables
var port = process.env.PORT || cfs.port;
var server = require('http').createServer(app);

//listen to the port
server.listen(port);

//require files
require('./config')(app);
require('./routes')(app, ejs, cfs);

//debug
console.log('Your application is running on port:' + port);
