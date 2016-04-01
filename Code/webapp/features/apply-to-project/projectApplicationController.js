angular
    .module('projectApplicationController', [])
    .controller('projAppCtrl', function() {
        var vm = this;

        vm.mockData = [{
            firstName: "Miguel",
            lastName: "Conde",
            email: "mcond005@fiu.edu",
            pID: "1234567",
            rank: "Senior",
            gender: 'Male',
            college: "'Engineering & Computing",
            school: "School of Computing and Information Sciences",
            semester: "Spring 2016"
        }];

        vm.mockColleges = [
            {
                name: 'Business',
                schools: [
                    'School of Accounting',
                    'Alvah H. Chapman Jr. Graduate School of Business',
                    'R. Kirk Landon Undergraduate School of Business'
                ]
            },
            {
                name: 'Engineering & Computing',
                schools: [
                    'School of Computing and Information Sciences',
                    'OHL School of Construction'
                ]
            },
            {
                name: 'Architecture + The Arts',
                schools: [
                    'Architecture',
                    'Interior',
                    'Landscape',
                    'School of Music'
                ]
            }
        ];

        vm.genders = ['Male', 'Female'];
        vm.semesters = ['Spring 2016', 'Summer 2016'];

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

        vm.ranks = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Post-Grad'];

        vm.selectedProject = vm.mockProjects[0];
        vm.selectedCollege = vm.mockColleges[1];
        vm.message = "Test";
        vm.editorEnabled = false;


        vm.firstName = vm.mockData[0].firstName;
        vm.lastName = vm.mockData[0].lastName;
        vm.gender = vm.mockData[0].gender;
        vm.email = vm.mockData[0].email;
        vm.pID= vm.mockData[0].pID;
        vm.rank = vm.mockData[0].rank;
        vm.school = vm.selectedCollege.schools[0];
        vm.college = vm.mockData[0].college;
        vm.semester = vm.mockData[0].semester;


        vm.save = function() {
            vm.mockData[0].firstName = vm.firstName;
            vm.mockData[0].lastName = vm.lastName;
            vm.mockData[0].email = vm.email;
            vm.mockData[0].pID = vm.pID;
            vm.mockData[0].rank = vm.rank;
            vm.mockData[0].school = vm.school;
            vm.mockData[0].college = vm.college;

            console.log(vm.mockData[0].rank);
        };
    });
