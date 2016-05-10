const express      = require('express'),
      exhbs        = require('express-handlebars'),
      cookieParser = require('cookie-parser'),
      session      = require('express-session'),
      bodyParser   = require('body-parser'),
      mysql        = require('mysql'),
      connectionPv = require('connection-provider'),
      compression  = require('compression'),
      app          = express();


const showArtisansDataServices = require('./data_services/showArtisansDataServices');

const dbOptions = {
  host      : 'localhost',
  user      : 'root',
  password  : '2197832',
  port      : 3306,
  database  : 'artisans'
};


const showArtisans = require('./routes/showArtisans');

const serviceSetupCallBack = function(connection) {
  return {
    showArtisansDataServices : new showArtisansDataServices(connection)
  }
  
};


app.use(connectionPv(dbOptions, serviceSetupCallBack));
app.use(cookieParser('shhhh, very secret'));
app.use(session({ secret : 'keyboard cat', cookie :{ maxAge : 3600000 }, resave : true, saveUninitialized : true }));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(compression());
//app.use(flash());
app.engine('handlebars', exhbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');

app.get("/", function(req, res) {
  res.render("index");
});


const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App running on http://%s:%s', host, port);
});
