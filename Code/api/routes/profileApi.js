var bodyParser    = require('body-parser');
var Profile        = require('../models/users');

module.exports = function(app, express) {

    var apiRouter = express.Router();

    //route get or adding products to a users account
    apiRouter.route('/profile')
        .post(function (req, res) {
            Profile.create(req.body, function (err) {
                if(err) {
                    return res.send(err);
                }
                return res.json({success: true});
            });
        });
    apiRouter.route('/profile/:email')
        .get(function (req, res) {
            Profile.find({email:req.params.email}, function (err, profile) {
                if(err) {
                    console.log(err);
                    return res.send('error');
                }
                return res.json(profile);
            });
        });

    return apiRouter;
};
