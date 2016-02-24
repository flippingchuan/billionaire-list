
module.exports = function(app) {
	app.get('/test', function(req, res) {
		res.render('handlebars-example', data);
	});
};

var data = {
  title: 'practical node.js',
  body: '@azat_co'
};