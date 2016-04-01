angular.module('ProjectProposalController', ['ProjectProposalService'])
    .controller('ProjectProposalController', function($scope, ProjectService, $stateParams){
        $scope.list = [1,2,3];

        $scope.items2 = {
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
        vm.image = ""
        vm.description = "";
        vm.disciplines = [];
        vm.editingMode = false;

        init();
        function init () {
            if($stateParams.id != null){
                vm.id = $stateParams.id;
                vm.editingMode = true;
                getProjectById();
            }
        }
        
        function getProjectById (){
            ProjectService.getProject(vm.id).then(function(data){
                $scope.project = data; 
            })
        }

        vm.save = function () {

            if(!vm.editingMode){
                ProjectService.createProject($scope.project)
                    .success(function(data){
                    });
            }
            else{
                ProjectService.editProject($scope.project)
                    .success(function(data){
                    });
            }
        };

        $scope.toggleCheckbox = function toggleSelection(majors) {
            var idx = vm.disciplines.indexOf(majors);

            // is currently selected
            if (idx > -1) {
              vm.disciplines.splice(idx, 1);
            }

            // is newly selected
            else {
              vm.disciplines.push(majors);
            }
                        console.log(vm.disciplines);

        };

        $scope.majorList = [
            "Accounting",
            "Adult Education and Human Resource Development",
            "Advertising (Communication)",
            "African and African Diaspora Studies",
            "Anthropology/Sociology",
            "Applied Mathematics",
            "Architecture",
            "Art",
            "Art History",
            "Art Education",
            "Asian Studies",
            "Athletic Training",
            "Basic Biomedical Sciences",
            "Biochemistry",
            "Biology",
            "Biomedical Engineering",
            "Broadcast (Communication)",
            "Business Administration",
            "Chemistry",
            "Civil Engineering",
            "Communication",
            "Communication (Mass Communication)",
            "Communication Arts",
            "Computer Science",
            "Computer Engineering",
            "Construction Management",
            "Counselor Education",
            "Creative Writing",
            "Criminal Justice",
            "Curriculum & Instruction",
            "Cybersecurity",
            "Dietetics and Nutrition",
            "Digital Media Studies (Communication)",
            "Disaster Management",
            "Dramatic Arts",
            "Early Childhood Education",
            "Earth Sciences",
            "Economics",
            "Educational Leadership",
            "Educational Administration and Supervision",
            "Electrical Engineering",
            "Elementary Education",
            "Engineering Management",
            "Engineering (See Specializations)",
            "English",
            "Environmental Engineering",
            "Environmental Policy and Management",
            "Environmental Studies",
            "Exceptional Student Education",
            "Finance",
            "Foreign Language Education",
            "Forensic Science",
            "French",
            "Geography",
            "Geosciences",
            "Global and Sociocultural Studies",
            "Global Governance",
            "Global Strategic Communications",
            "Health Informatics and Management Systems",
            "Health Services Administration",
            "Higher Education Administration",
            "History",
            "Hospitality Administration/Management",
            "Human Resource Management",
            "Information Systems",
            "Information Technology",
            "Interdisciplinary Studies",
            "Interior Architecture",
            "International Business",
            "International Real Estate",
            "International Relations",
            "International/Intercultural Education",
            "Journalism (Communication)",
            "Landscape Architecture",
            "Latin American & Caribbean Studies",
            "Law",
            "Liberal Studies",
            "Linguistics",
            "Management",
            "Management Information Systems",
            "Marine Biology",
            "Marketing",
            "Mass Communication",
            "Materials Engineering",
            "Mathematics",
            "Mathematical Sciences",
            "Mechanical Engineering",
            "Medicine",
            "Military Science Electives",
            "Music Teacher Education",
            "Music",
            "Nursing",
            "Nursing Practice",
            "Occupational Therapy",
            "Philosophy",
            "Physical Education",
            "Physical Therapy",
            "Physician Assistant Studies",
            "Physics",
            "Political Science",
            "Portuguese",
            "Psychology",
            "Public Administration",
            "Public Affairs",
            "Public Health",
            "Public Relations (Communication)",
            "Reading Education",
            "Real Estate",
            "Recreation and Sports Management",
            "Religious Studies",
            "School Psychology",
            "Social Welfare",
            "Social Work",
            "Sociology",
            "Spanish",
            "Speech Language Pathology",
            "Special Education",
            "Statistics",
            "Student Counseling/Guidance/Counselor Education",
            "Studio Art",
            "Telecommunications/Networking",
            "Theatre",
            "Urban Education",
            "Visual Arts",
            "Women's Studies"
        ];
    });