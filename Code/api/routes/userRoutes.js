//Includes
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser    = require('body-parser');

//Models
var User          = require('../models/users');

module.exports = function (app, express) {

    //Google+ Authentication
    app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: 'http://localhost:3000/#/profile',
            failureRedirect: 'http://localhost:3000/#/login'
        })
    );


    passport.serializeUser(function(user, done) {
        done(null, {
            id: user.id,
            email: user.email,
            firstName: user.firstName
        });
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    app.post('/login',
        passport.authenticate('local', {
            successRedirect: '/#/profile',
            failureRedirect: '/#/login',
            failureFlash: true })
    );

    var userRouter = express.Router();

    userRouter.route('/users')

        .post(function (req, res) {

            var user = new User();

/* For post Unit Test

            user.firstName = "Tiago";
            user.lastName = "Moore";
            user.password = "1234123";
            user.passwordConf = "1214124";
            user.email = "tmoor039@fiu.edu";
            user.googleKey = ""
            user.userType = "Student";
            user.rank = "Senior";
            user.pantherID = "11111";
            user.gender = "Male";
            user.project = ""
            user.piApproval = true;
            user.piDenial = true;
            user.verifiedEmail = true;
            user.college = "Engineering & Computing";
            user.department = "SCIS";

*/
            user.firstName     = req.body.firstName;  // set the users name (comes from the request)
            user.lastName     = req.body.lastName;  // set the users last name
            user.pantherID        = req.body.pantherID;     // set the users panther ID
            user.password   = req.body.password;  // set the users password (comes from the request)
            user.passwordConf = req.body.passwordConf;
            user.email      = req.body.email;   // sets the users email
            user.project    = req.body.project; // sets the users project
            user.rank       = req.body.rank;    // set the users Rank within the program
            user.college      = req.body.college;   // sets the users college
            user.department      = req.body.department;   // sets the users college
            user.piApproval = req.body.piApproval;
            user.piDenial = req.body.piDenial;
            user.verifiedEmail = req.body.verifiedEmail;
            user.googleKey = " ";
            user.userType = req.body.userType;
            user.gender = req.body.gender;

            user.save(function (err) {
                if (err) {
                    // duplicate entry
                    if (err.code == 11000)
                        return res.json({success: false, message: 'A user already exists.'});
                    else
                        return res.send(err);

                }

                // return the object id for validation and message for the client
                res.json({ objectId: user._id, message: 'User created!' });
            });
        });
/*
    User.findOne({'email': 'jpere268@fiu.edu'}, function(err, user){
        console.log(user.firstName);
        console.log(user.lastName);
        console.log(user.password);
        console.log(user.email);
        console.log(user.userType);
        console.log(user.rank);
        console.log(user.pantherID);
        console.log(user.project);
        console.log(user.piApproval);
        console.log(user.piDenial);
        console.log(user.verifiedEmail);
        console.log(user.college);
        console.log(user.department);
        console.log(user.google.name);
    });
*/
    return userRouter;
};
