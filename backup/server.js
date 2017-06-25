var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var passport = require('passport');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({ secret: "secret kk" }));
app.use(passport.initialize());
app.use(passport.session());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

//require ("./test/app.vendor")(app);
//load the app.vendor
require ("./assignment/app.js")(app);


var ipaddress = process.env.PORT;
var port      = process.env.PORT|| 3000;

app.listen(port)//, ipaddress);
