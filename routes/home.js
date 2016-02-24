var request = require('request');

/* GET home page. */
module.exports = function(app) {
	app.get('/', function(req, res) {
		url = 'http://www.forbes.com/ajax/list/data?year=2015&uri=billionaires&type=person';
		request(url, function(error, response, body) {
			if(!error) {
				var incomeSourceList = {};
				incomeSourceList.data = parseData(body);
		    // res.send(incomeSourceList);
		    res.render('home', incomeSourceList);
	  	}
	  });
	});
};

//Helper methods
function parseData(body) {
	var rawData = JSON.parse(body);
	var retData = [];
	var counter = 1;
	//Ret Objects
	var container = {};
	for (var i = 0; i < rawData.length; i++) {
		if (rawData[i].position === counter) {
			retData.push(rawData[i]);

			// generateCount(ageList, rawData[i].age);
			// generateCount(countryList, rawData[i].country);
			generateCount(container, rawData[i].source);

			counter++;
			if (counter >= 100) {
				break;
			}
		}
	}
	return retData;
}

function generateCount(container, data) {
	if (container[data]){ 
		container[data] = container[data] + 1;
	}
	else {
		container[data] = 1;
	}	
}