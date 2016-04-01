angular.module('ProfileService', [])
    .factory('Profile', userService);

    function userService($http) {
        // create a new object
        var profileFactory = {};

        profileFactory.loadProfile = function (email) {
            return $http.get('/api/profile/' + email);
        };

        profileFactory.saveProfile = function (profileData) {
            return $http.post('/api/profile/' + profileData);
        };

        return profileFactory;
    }
