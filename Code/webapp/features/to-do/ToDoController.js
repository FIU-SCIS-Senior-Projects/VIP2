(function() {
    angular.module('toDoModule')
    .controller('toDoController', toDoController);

    toDoController.$inject = ['ToDoService'];

    function toDoController (ToDoService) {
        var vm = this;
        vm.list = [];
        vm.personalCount = 0;
        vm.facultyCount = 0;
        vm.studentCount = 0;

        vm.markedAsRead = function(todo) {
            console.log(todo);
            ToDoService.markAsRead(todo._id)
                .then(function(data) {
                    todo.read = true;
                });
            if(todo.type == 'personal') vm.personalCount--;

            else if(todo.type == 'faculty') vm.facultyCount--;

            else if(todo.type == 'student') vm.studentCount--;
        };

        function getToDo () {
            ToDoService.loadAllToDo()
                .then(function(data) {
                    vm.list = data.data;
                    for(i = 0; i < vm.list.length; i++) {
                        if(vm.list[i].read) continue;

                        if(vm.list[i].type == 'personal') vm.personalCount++;

                        else if(vm.list[i].type == 'faculty') vm.facultyCount++;

                        else if(vm.list[i].type == 'student') vm.studentCount++;
                    }
                });
        }

        getToDo();
    }
}());
