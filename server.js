var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Photo = require('./api/models/photoModel'), 
  User = require('./api/models/userModel'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PlaceDB', { useMongoClient: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/placeRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);

