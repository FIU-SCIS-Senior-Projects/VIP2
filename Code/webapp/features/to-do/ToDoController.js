(function() {
    angular.module('toDoModule')
    .controller('toDoController', toDoController);

    toDoController.$inject = ['ToDoService'];

    function toDoController (ToDoService) {
        var vm = this;
        vm.test = 'Message';
        vm.list = {};

        function getToDo () {
            vm.list = ToDoService.loadAllToDo();
        }
        getToDo();
    }
}());
