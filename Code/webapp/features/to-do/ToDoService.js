(function() {
    angular.module('toDoModule')
    .factory('ToDoService', toDoFactory);

    function toDoFactory () {
        // create a new object
        var toDoFactory = {};
        var mockData = [
            {todo: "fill in your profile", read: false, type: "personal"},
            {todo: "student a applied", read: false, type: "student"},
            {todo: "student b applied", read: true, type: "student"},
            {todo: "student c applied", read: false, type: "student"},
            {todo: "student d applied", read: true, type: "student"},
            {todo: "faculty a registered", read: false, type: "faculty"},
        ];

        toDoFactory.loadAllToDo = function () {
            return mockData;
            // return $http.get('/api/');
        };

        toDoFactory.clearOneToDo = function (id) {
            // return $http.get('/api//' + id);
        };

        return toDoFactory;
    }
}());
