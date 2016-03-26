angular.module('UserProfileController', [])
	.controller('UserCtrl', function() {
		var vm = this;

		vm.mockData = [{
			firstName: "Steven",
			lastName: "Rowe",
			email: "Rowe"
		}];

		vm.message = "Test";

		console.log(vm.mockData[0].firstName);


		vm.editorEnabled = false;

		vm.enableEditor = function() {
			vm.editorEnabled = true;
			vm.editableTitle = vm.mockData[0].firstName;
		};

		vm.disableEditor = function() {
			vm.editorEnabled = false;
		};

		vm.save = function() {
			vm.mockData[0].firstName = vm.editableTitle;
			vm.disableEditor();
		};
	});
