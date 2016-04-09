(function() {
    angular.module('toDoModule')
    .filter('boldToDo', toDoFilter);

    function toDoFilter () {
        return function (input, read) {
            if(read) {
                return input;
            } else {
                return '<b>' + input + '</b> <i class="fa fa-exclamation-circle red-text"></i>';
            }
        };
    }
}());
