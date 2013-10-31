var express = require("express"),
    Twitter = require("twitter"),
    oauth = require("oauth"),
    path = require('path'),
    fs = require('fs.extra');

var configFile = process.argv[2] || "./config.json";
var configPath = path.resolve(process.cwd(), configFile);
var config = null;

try {
	config = require(configPath);
} catch(e) {
	console.error("Doesn't look like there was a config file to load, try copying config.example.json to config.json and filling it out");

	var configExampleFile = "./config.example.json";
	var configExamplePath = path.resolve(process.cwd(), configExampleFile);

	fs.copy(configExamplePath, configPath, function() {
		console.log("I've created a config.json file for you and openned it in your default editor for convenience.  After updating it, try launching again.");
		require('child_process').exec('open ' + configPath);
		process.exit(3);
	});
}

var logger = function(req, res, next) {
    console.log("Received request: " + req.originalUrl);
    next(); 
}

console.log(config);

var twitter = new Twitter(config);

var app = express();
var port = process.env.PORT || 8888;
var webroot = __dirname + "/../www";

app.configure(function(){
    app.use(logger); // Here you add your logger to the stack.
    app.use(app.router); // The Express routes handler.
});

console.log("Enabling gzip compression");
app.use(express.compress());

console.log("Serving files from " + webroot);
app.use(express.static(webroot));

app.get('/twitter/homeTimeline', function(req, res) {
	twitter.getHomeTimeline({}, function(data)
	{
		res.send(data);
	});
});

app.get('/twitter/currentUser', function(req, res) {
	twitter.verifyCredentials(function(data) {
		res.send(data);
	});
});

app.get('/twitter/userTimeline', function(req, res) {
	twitter.getUserTimeline({}, function(data)
	{
		res.send(data);
	});
});

console.log("TwitterExample running on " + port);
app.listen(port);