var express = require('express')
var path = require('path')
var request = require('request')

var app = express();

app.use(express.static(path.join(__dirname,'static')))

app.post('/countusage', function(req,res){
	//This is an endpoint for counting, how often a client uses the face api
	console.log(new Date().toString() + ":" + req.url);
})

app.post('/customerinbar', function(req,res){
	//This is your endpoint for pouring drinks
	//If the customerid sent in exists in the orders, then drink is poured
	//var newurl = 'http://104.47.146.9:8167/api/customer/customerinbar';
	var newurl = 'http://localhost:8167/api/customer/customerinbar';
	console.log(req)
	/*
	request({
		url: newurl,
		qs: req.query,
		method: 'POST'
	}).pipe(res)
	*/
})

var port = process.env.PORT || 8080;
app.listen(port);

console.log('Listening on 8080')
