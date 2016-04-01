angular.module('ProjectProposalService', [])

    .factory('ProjectService', function($http) {

        // create a new object
        var projectFactory = {};

        projectFactory.createProject = function (projectData) {
            return $http.post('/api/projects', projectData)
        };

        projectFactory.editProject = function (projectData, id) {
            return $http.put('/api/projects', projectData, id);
        };

        projectFactory.getProject = function (id) {
            return $http.get('/api/projects/'+ '56fd9fcc8e119ae80ee357e1');
        };

        projectFactory.delete = function (id) {
            return $http.delete('/api/projects/' + id);
        };
        return projectFactory;
    });