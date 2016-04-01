angular.module('UserProfileController', ['ProfileService'])
	.controller('UserCtrl', function(Profile) {
		var vm = this;
        vm.profileData = {};
		vm.editorEnabled = false;

        function loadProfile() {
            var email= 'mrowe009@fiu.edu';
            Profile.loadProfile(email)
                .then(function (res) {
                    vm.profileData = res.data[0];
                });
        }

		vm.enableEditor = function() {
			vm.editorEnabled = true;
			vm.firstName = vm.mockData[0].firstName;
			vm.lastName = vm.mockData[0].lastName;
			vm.email = vm.mockData[0].email;
		};

		vm.disableEditor = function() {
			vm.editorEnabled = false;
		};

		vm.save = function() {
			vm.mockData[0].firstName = vm.firstName;
			vm.mockData[0].lastName = vm.lastName;
			vm.mockData[0].email = vm.email;
			vm.disableEditor();
		};

        loadProfile();
	});
