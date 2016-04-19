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
                ToDoService.loadAllToDo()
                    .then(function (data) {
                        for(i = 0; i < data.data.length; i++) {
                            if(data.data[i].read) {
                                continue;
                            } else {
                                this.count++;
                            }
                        }
                    });
            }
        };
});
}());
