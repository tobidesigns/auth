var express = require ("express"),
	mongoose = require("mongoose"),
	passport = require("passport"),
	user = require("./models/user"),
	bodyParser = require("body-parser"),
	localStrategy = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose")

mongoose.connect("mongodb://localhost/auth_demo_app");


var app = express();
app.set('view engine', 'ejs');

app.use(require("express-session")({
	secret: "Arsenal is the best team in the world",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/secret', function (req,res){
	res.render("secret");
});

app.get('/', function (req,res){
	res.render("home");
});

