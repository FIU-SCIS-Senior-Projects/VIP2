angular.module('UserProfileController', [])
	.controller('UserCtrl', function() {
		var vm = this;

		vm.mockData = [{
			firstName: "Steven",
			lastName: "Rowe",
			email: "mrowe009@fiu.edu"
		}];

		vm.message = "Test";
		vm.editorEnabled = false;

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
			vm.mockData[0].firstName = vm.editableTitle;
			vm.disableEditor();
		};
	});
