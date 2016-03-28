angular.module('ProjectProposal', [])
    .controller('ProjectProposalController', function($scope){
        $scope.list = [1,2,3];

        var vm = this;
        vm.title = "";
        vm.description = "";
        vm.disciplines = "";

        vm.save = function () {
            console.log(vm.title);
            console.log(vm.description);
            console.log(vm.disciplines);
            console.log(vm.firstSemester);
            console.log(vm.maxStudents);
        };
    });