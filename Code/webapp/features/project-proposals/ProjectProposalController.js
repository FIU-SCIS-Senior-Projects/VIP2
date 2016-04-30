angular.module('ProjectProposalController', ['ProjectProposalService'])
    .controller('ProjectProposalController', function($scope, ProjectService, $stateParams){

        $scope.colleges= [
            {
                name: 'Architecture & The Arts',
                schools: [
                    'Architecture',
                    'Interior Architecture',
                    'Landscape Architecture and Environmental Urban Design',
                    'Art and Art History',
                    'Communication Arts',
                    'School of Music',
                    'Theatre']
            },
            {
                name: 'Arts and Sciences & Education',
                schools: [
                    'Biological Sciences',
                    'Chemistry and Biochemistry',
                    'Earth and Environment',
                    'English',
                    'Mathematics and Statistics',
                    'Philosophy',
                    'Physics',
                    'Psychology',
                    'Teaching and Learning',
                    'Leadership and Professional Studies',
                    'School of Education',
                    'School of Enviroment, Arts & Society',
                    'School of Integrated Science & Humanity'
                ]
            },
            {
                name: 'Business',
                schools: [
                    'Decision Sciences and Information Systems',
                    'Alvah H. Chapman Jr. Graduate School of Business',
                    'R. Kirk Landon Undergraduate School of Business',
                    'Finance',
                    'Management and International Business',
                    'Marketing',
                    'School of Accounting',
                    'Real Estate'
                ]
            },
            {
                name: 'Chaplin School of Hospitality and Tourism Management',
                schools: [
                    'Hospitality and Tourism Management'
                ]
            },
            {
                name: 'Engineering & Computing',
                schools: [
                    'School of Computing and Information Sciences',
                    'OHL School of Construction',
                    'Department of Biomedical Engineering',
                    'Department of Civil and Environment Engineering',
                    'Department of Electrical and Computer Engineering',
                    'Department of Mechanical and Materials Engineering'
                ]
            },
            {
                name: 'Herbert Wertheim College of Medicine',
                schools: [
                    'Cellular Biology and Pharmacology',
                    'Human and Molecular Genetics',
                    'Immunology',
                    'Medical and Population Health Sciences Research'
                ]
            },
            {
                name: 'Journalism and Mass Communication',
                schools: [
                    'Advertising and Public Relations',
                    'Journalism Broadcasting and Digital Media'
                ]
            },
            {
                name: 'Law',
                schools: [
                    'College of Law'
                ]
            },
            {
                name: 'Nicole Wertheim College of Nursing & Health Sciences',
                schools: [
                    'Biostatistics',
                    'Dietetics and Nutrition',
                    'Environmental and Occupational Health',
                    'Epidemiology',
                    'Health Policy and Management',
                    'Health Promotion and Disease Prevention'
                ]
            },
            {
                name: 'Robert Stempel College of Public Health & Social Work',
                schools: [
                    'School of Social Work'
                ]
            },
            {
                name: 'Steven J. Green School of International and Public Affairs',
                schools: [
                    'Criminal Justice',
                    'Economics',
                    'Global and Sociocultural Studies',
                    'History',
                    'Modern Languages',
                    'Public Administration',
                    'Religious Studies'
                ]
            }
        ];

        $scope.fixedColleges = $scope.colleges;

        for(school in $scope.fixedColleges){
            var name = $scope.fixedColleges[school]['name']
            var fixedNames = name.split(' ').join('_');
            fixedNames = fixedNames.split('&').join('and');
            console.log(fixedNames);
            $scope.fixedColleges[school]['name'] = fixedNames;
        };

        var vm = this;
        vm.title = "";
        vm.image = ""
        vm.description = "";
        vm.disciplines = [];
        vm.editingMode = false;
        //vm.submit = submit;
        //$scope.project.submit = submit;

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
            });
        }
        
        $scope.save = function save() {
            console.log($scope.project.description)
            if(!vm.editingMode){
                $scope.project.status='pending'
                ProjectService.createProject($scope.project)
                    .then(function(data){
                    });
            }
            else{
                $scope.project.id = $stateParams.id
                ProjectService.editProject($scope.project, $stateParams.id)
                    .then(function(data){
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
        };
	
		$scope.sendEmail = function() {
				ProjectService.sendEmail($scope.project)
                    .success(function(data){
                    });
			
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
