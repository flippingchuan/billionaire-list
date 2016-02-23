var express = require('express');
var request = require('request');
var app     = express();

app.get('/', function(req, res) {
	url = 'http://www.forbes.com/ajax/list/data?year=2015&uri=billionaires&type=person';
	request(url, function(error, response, body) {
		if(!error) {
			var rawData = JSON.parse(body);
			var retData = [];
			var counter = 1;

			//Ret Objects
			var ageList = {};
			var countryList = {};
			var incomeSourceList = {};

			for (var i = 0; i < rawData.length; i++) {
				if (rawData[i].position === counter) {
					retData.push(rawData[i]);

					generateCount(ageList, rawData[i].age);
					generateCount(countryList, rawData[i].country);
					generateCount(incomeSourceList, rawData[i].source);

					counter++;

					if (counter >= 100) {
						break;
					}
				}
			}

	    res.send(incomeSourceList);
	    // res.sendFile(__dirname + '/template/main.html');
  	}
  });
});

function generateCount(age, data) {
	if (age[data]){ 
		age[data] = age[data] + 1;
	}
	else {
		age[data] = 1;
	}	
}


app.listen('3000')

console.log('Magic happens on port 3000');

exports = module.exports = app;