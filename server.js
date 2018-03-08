
let express = require ("express");
let path = require('path');
let bodyParser = require ("body-parser");
let router = express.Router();
let mongoose = require("mongoose");
let session = require("express-session");

//Developer made routes
var campApi = require('./routes/app');
var homePage = require('./routes/index');

//set up express app
let app = express();


//connect to mongodb
var options = {
    useMongoClient: true
}
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://admin:1234@ds151078.mlab.com:51078/leah123", options)
    .then(() => console.log('db connected'));



app.listen(4000, () => {
    console.log("server connected");
});


app.set("view engine", "ejs");

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(session({secret:"jeruoiejsdoiwy89ehw", resave: false,saveUninitialized:true}));
app.use('/', homePage);
app.use('/api', campApi);


