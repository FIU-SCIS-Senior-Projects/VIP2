//base setup
var express		= require('express');
var nodemailer = require('nodemailer');

var mongoose	        = require('mongoose');
var passport			= require('passport');
var cookieParser		= require('cookie-parser');
var flash				= require('connect-flash');
var session             = require('express-session');
var bodyParser	        = require('body-parser');
var path		= require('path');
var config		= require('./api/config/config');
var app			= express();

//connect to mongodb
mongoose.connect(config.database);
mongoose.connection.on('error', function(err){
	console.log('Error: could not connect to MongoDB.');
});


require('./api/config/passport')(passport);
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.use(session(({ secret: 'ThisIsMyDirtyLittleSecretChocolatebunniesson'})));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./api/routes/routes.js')(app, passport);
// set static files location
// used for requests that our frontend will make
app.use(express.static(__dirname + '/webapp'));


var userRoutes = require('./api/routes/userRoutes')(app, express);
var projectRoutes = require('./api/routes/projectsRoutes')(app,express);
var supportRoutes = require('./api/routes/support')(app,express);

app.use('/api', projectRoutes);
app.use('/userapi', userRoutes);
app.use('/support', supportRoutes);


app.post('/register-project-proposals',function(req,res){
	var SMTP_config = {
        service: "Gmail",
        auth: {
            user: 'vvega019@fiu.edu',
            pass: 'Vega2016-'
        }
    };
         // create reusable transporter object using the default SMTP transport
	//var transporter = nodemailer.createTransport('smtps://visualnet2008@gmail.com:20001142h@smtp.gmail.com');
	var transporter = nodemailer	.createTransport("SMTP", SMTP_config);
	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '"Victoriano Vega" <visualnet2008@gmail.com>', // sender address
	    to: 'vvega019@fiu.edu', // list of receivers
	    subject: 'New Project Proposal Notification', // Subject line
	    text: 'A new project proposal has been submitted', // plaintext body
	    html: '<b>A new project proposal has been submitted</b>' // html body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});                                           
});


//home page
app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/webapp/index.html'));
});


//start the server
app.listen(config.port);
console.log('Express router listening on port: ' + config.port);
