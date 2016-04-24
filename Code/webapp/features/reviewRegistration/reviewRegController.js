(function () {
    'use strict';

    angular
        .module('reviewRegistration')
        .controller('reviewController', reviewController);

    reviewController.$inject = ['$state', '$scope', 'reviewRegService'];
    /* @ngInject */
    function reviewController($state, $scope, reviewRegService) {
        var vm = this;
        vm.profile;
        vm.updateProfile = updateProfile;

        var uiD = "571aba469235f77a0fcd8b00";
        init();
        function init(){
            loadData();
        }

        function loadData(){
            reviewRegService.getReg(uiD).then(function(data){
                vm.profile = data;
                console.log(data);
            });
        }

        function updateProfile () {
            reviewRegService.saveProfile(vm.profile).then(function(data){
                console.log("Profile Updated");
            });
        }

    }
})();
