angular.module('ProjectProposalController', ['ProjectProposalService'])
    .controller('ProjectProposalController', function($scope, ProjectService){
        $scope.list = [1,2,3];

        $scope.items = {
            "Schools": {
                "College of Engineering": {
                    "majors": [
                        "Computer Science",
                        "Information Technology"
                    ]
                },
                "College of Arts And Sciences": {
                    "majors" : [
                        "Biology",
                        "Physics"
                    ]
                }
            }
        }

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

            ProjectService.createProject($scope.project)
                .success(function(data){
                    console.log('holy shit bro')
                });
        };
    });