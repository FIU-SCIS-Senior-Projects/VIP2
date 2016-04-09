(function() {
    angular.module('toDoModule')
    .directive('toDo', function () {
        return {
            templateUrl: 'features/to-do/toDoTemplate.html',
            restrict: 'E' // Can be used as HTML element or as an attribute
        };
    });
}());
