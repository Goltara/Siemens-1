var express = require('express');
var routes = require('./routes');
var hbs = require('express-hbs');
var path = require('path');

var app = express();

app.engine('hbs', hbs.express3());
var view = path.join(__dirname, 'views');
app.set('views', view);
app.set('view engine', 'hbs');

app.use('/', express.static(__dirname + '/public/html'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/style', express.static(__dirname + '/public/style'));

routes(app);

app.listen(8080);