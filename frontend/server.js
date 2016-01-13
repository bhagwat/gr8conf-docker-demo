var express = require('express');
var app = express();
var routes = require("./routes");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');

app.use(express.static(__dirname + '/public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

routes.init(app);

var port = process.env.PORT || 3000;
app.listen(port);
console.log("App listening on port: " + port);