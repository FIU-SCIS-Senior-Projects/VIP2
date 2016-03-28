angular.module('ProjectProposal', [])
    .controller('ProjectProposalController', function($scope){
        $scope.list = [1,2,3];
        console.log('hi');

        var vm = this;
        vm.title = "";
        vm.description = "";
        vm.disciplines = "";
        vm.minStudents = 0;
        vm.maxStudents = 0;

        vm.save = function () {
            console.log(vm.title);
        };
    });