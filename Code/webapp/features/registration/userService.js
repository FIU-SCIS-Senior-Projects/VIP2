/**
 * Created by tmoore on 4/5/16.
 */

angular.module('userService', [])

    .factory('User', function($http) {

        // create a new object
        var userFactory = {};

        // create a user
        userFactory.create = function(userData) {
            return $http.post('/userapi/users/', userData);
        };

        // get a single user by id
        userFactory.get = function(id) {
            return $http.get('/userapi/users/'+ id);
        };

        // get all users
        userFactory.all = function() {
            return $http.get('/userapi/users/');
        };

        // update a user
        userFactory.update = function(id, userData) {
            return $http.put('/userapi/users/'+ id, userData);
        };

        // delete a user
        userFactory.delete = function(id) {
            return $http.delete('/api/users/' + id);
        };

        // return our entire userFactory object
        return userFactory;


    });
