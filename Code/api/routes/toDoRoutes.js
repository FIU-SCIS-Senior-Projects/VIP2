var mongoose	= require('mongoose');
var ToDo	    = require('../models/todo');

module.exports = function(app, express) {
    var apiRouter = express.Router();

    //insert interceptor for auth token/session

    apiRouter.route('/todo')
        .get(function (req, res) {
            ToDo.find({}, function(err, todo) {
                if(err) {
                    res.send('There was an error processing the tasks');
                } else {
                    res.send(todo);
                }
            });
        })
        .post(function (req, res) {
            ToDo.create(req.body, function( err) {
                if(err) {
                    return res.send('something went wrong');
                } else {
                    res.send('to do added');
                }
            });
        });

    apiRouter.route('/todo/:id')
        .post(function (req, res) {
            console.log(req.params.id);
            ToDo.findOne({_id:req.params.id}, function(err, todo) {
                if(err) {
                    res.send('There was an error processing the tasks');
                } else {
                    todo.read = false;
                    todo.save();
                    res.send('read');
                }
            });
        });

    return apiRouter;
}
