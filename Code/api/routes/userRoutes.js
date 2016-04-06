var bodyParser    = require('body-parser');    // get body-parser
var User      = require('../models/users');

module.exports = function(app, express) {

    var apiRouter = express.Router();

    apiRouter.get('/users', function(req, res) {

    });

    return apiRouter;
};