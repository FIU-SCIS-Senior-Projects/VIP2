(function() {
    angular.module('vipHeader', ['toDoModule'])
    .directive('vipHeader', function (ToDoService) {
        return {
            templateUrl: 'features/header/headerTemplate.html',
            restrict: 'E',
            scope:{
                count: '='
            },
            controllerAs: 'header',
            controller: function () {
                this.count = 0;
                //console.log(ToDoService.loadAllToDo());
                var list = ToDoService.loadAllToDo();
                for(i = 0; i < list.length; i++) {
                    if(list[i].read)
                        continue;
                    this.count++;
                }
            }
        };
});
}());
