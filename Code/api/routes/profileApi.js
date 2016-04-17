var bodyParser    = require('body-parser');
var Profile        = require('../models/users');
var passport      = require('passport');

module.exports = function(app, express) {
    var apiRouter = express.Router();
        
    apiRouter.route('/profile')
        .put(function (req, res) {
            console.log("This is the body");
            console.log(req.body);
            /*
            * This update takes TOO LONG to complete therefore im using the not so short approach but the fastest of the two
            */
            // Profile.update({ _id: req.body._id }, req.body).then(function(WriteResult){
            //     console.log(WriteResult);
            //     return res.json(profile);
            // });
            Profile.findById(req.body._id, function(err, profile){
                profile.email = req.body.email;
                profile.firstName = req.body.firstName;
                profile.lastName = req.body.lastName;
                //Missing fields go here
                
                profile.save(function(err){
                    if(err) res.send(err);
                    res.json(profile);
                })
            });
        })
        .get(function (req, res) {
            Profile.find({email:req.user.email}, function (err, profile) {
                if(err) {
                    console.log(err);
                    return res.send('error');
                }
                return res.json(profile);
            });
        });

    return apiRouter;
};
