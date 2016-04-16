angular.module('user-profile')
    .factory('ProfileService', userService);

    function userService($http) {
        // create a new object
        var profileFactory = {};

        // profileFactory.loadProfile = function (email) {
        //     return $http.get('/api/profile/' + email).then(function(data){
        //        console.log("Got the Projects");
        //        return data.data; 
        //     });
        // };
        profileFactory.loadProfile = function () {
            return $http.get('/api/profile/').then(function(data){
               console.log("Got the Profile");
               return data.data; 
            });
        };

        profileFactory.saveProfile = function (profileData) {
            return $http.post('/api/profile/' + profileData).then(function(data){
               console.log("Got the Profile");
               return data.data; 
            });
        };

        return profileFactory;
    }
