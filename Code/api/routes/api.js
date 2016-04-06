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
           Project.create(req.body, function (err) {
                if(err) {
                    return res.send(err);
                }
                return res.json({success: true});
            });
        })
        .get(function (req, res) {
            Project.findById(req.params.id, function(err, proj){
                if(err)
                    res.send(err);
                res.json(proj);
            });
            // Project.find({}, function (err, projects) {
            //     if(err) {
            //         console.log(err);
            //         return res.send('error');
            //     }
            //     return res.json(projects.find(req.params.id));
            // });
        });


    return apiRouter;

    // return epilogue.resource({
    //     model: express.projects,
    //     pagination: true,
    //     actions: ['list'],
    //     search: {
    //         param: 'query',
    //         attributes: [ 'fullName' ]
    //     },
    //     endpoints: [apiRouter + '/views_table']
    // });
};