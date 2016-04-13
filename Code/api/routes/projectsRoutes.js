var bodyParser      = require('body-parser');
var Project         = require('../models/projects');

module.exports = function(app, express) {

    var apiRouter = express.Router();

    //route get or adding products to a users account
    apiRouter.route('/projects')
        .post(function (req, res) {
           Project.create(req.body, function (err) {
                if(err) {
                    return res.send(err);
                }
                return res.json({success: true});
            });
        })
        .get(function (req, res) {
            Project.find({}, function (err, projects) {
                if(err) {
                    console.log(err);
                    return res.send('error');
                }
                return res.json(projects);
            });
        });

    apiRouter.route('/projects/:id')
        .put(function (req, res) {
            console.log(req.params.id);
            console.log(req.body.id);
            Project.findById(req.params.id, function(err, proj){
                console.log(proj);
                if(err) res.send(err);
                if(req.body.title!=="") proj.title = req.body.title;
                if(req.body.description!=="") proj.description = req.body.description
                if(req.body.disciplines!=="") proj.disciplines = req.body.disciplines;
                if(req.body.image!=="") proj.image = req.body.image;
                if(req.body.firstSemester!=="") proj.firstSemester = req.body.firstSemester;
                if(req.body.maxStudents!=="") proj.maxStudents = req.body.maxStudents;
                proj.save(function(err){
                    if(err) res.send(err);
                    res.json({message: 'Updated!'});
                })
            });
        })
        .get(function (req, res) {
            Project.findById(req.params.id, function(err, proj){
                if(err)
                    res.send(err);
                res.json(proj);
            });
        })
        .delete(function (req, res) {
            Project.remove({_id: req.params.id}, function(err, proj){
            if(err)
                res.send(err);
                res.json({message: 'successfully deleted!'});
            });
        });


    return apiRouter;
};