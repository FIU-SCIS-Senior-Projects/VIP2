var bodyParser    = require('body-parser');
var Profile        = require('../models/users');
var passport      = require('passport');

module.exports = function(app, express) {
    var apiRouter = express.Router();
        
    apiRouter.route('/profile')
        .put(function (req, res) {
            console.log("This is the body");
            console.log(req.body);
            Profile.update({ _id: req.body._id }, req.body);                
            //     req.body, function (err) {
            //     if(err) {
            //         return res.send(err);
            //     }
            //     return res.json({success: true});
            // });
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
