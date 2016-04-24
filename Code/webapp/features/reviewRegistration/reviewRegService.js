angular.module('reviewRegistration')
    .factory('reviewRegService', userService);

function userService($http) {
    // create a new object
    var profileFactory = {};


    profileFactory.getReg = function (user_id) {
        return $http.get('/api/verifyuser/'+user_id).then(function(data){
            console.log(data);
            console.log(data.data);
            return data.data;
        });
    };

    profileFactory.saveProfile = function (profileData) {
        return $http.put('/api/profile/',profileData).then(function(data){
            return data.data;
        });
    };

    return profileFactory;
}
