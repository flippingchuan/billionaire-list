var express = require('express'),
		hbs = require('hbs'),
		app = express();

//routes
require('./routes/home')(app);
require('./routes/test')(app);

//View engine
app.set('view engine', 'html');
app.set('views', __dirname + '/templates/pages');
app.engine('html', hbs.__express);
hbs.registerPartials(__dirname + '/templates/partials');


//Static directories
app.use('/dest', express.static(__dirname + '/dest')); 

//Port
app.listen('3000');

console.log("*******************************");
console.log("Starting the awesome project...");
console.log("*******************************");