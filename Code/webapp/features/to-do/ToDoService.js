(function() {
    angular.module('toDoModule')
    .factory('ToDoService', toDoFactory);

    function toDoFactory () {
        // create a new object
        var toDoFactory = {};
        var mockData = [
            {todo: "fill in profile", read: false},
            {todo: "student a applied", read: false},
            {todo: "student b applied", read: true},
            {todo: "student c applied", read: false},
            {todo: "student d applied", read: true},
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
