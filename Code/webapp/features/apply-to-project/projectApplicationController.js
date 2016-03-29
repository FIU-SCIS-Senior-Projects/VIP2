angular
    .module('projectApplicationController', [])
    .controller('projAppCtrl', function() {
        var vm = this;

        vm.mockData = [{
            firstName: "Miguel",
            lastName: "Conde",
            email: "mcond005@fiu.edu",
            pID: "1234567"
        }];

        vm.mockProjects = [
            {
                name: 'project 1'
            },
            {
                name: 'project 2'
            },
            {
                name: 'project 3'
            },
            {
                name: 'project 4'
            }

        ];

        vm.selectedProject = vm.mockProjects[0];
        vm.message = "Test";
        vm.editorEnabled = false;


        vm.firstName = vm.mockData[0].firstName;
        vm.lastName = vm.mockData[0].lastName;
        vm.email = vm.mockData[0].email;
        vm.pID= vm.mockData[0].pID;


        vm.save = function() {
            vm.mockData[0].firstName = vm.firstName;
            vm.mockData[0].lastName = vm.lastName;
            vm.mockData[0].email = vm.email;
            vm.mockData[0].pID = vm.pID;

            console.log(vm.mockData[0].firstName);
        };
    });
