(function() {
    angular.module('vipHeader', [])
    .directive('vipHeaderBar', function () {
        var controller = function () {
            var vm = this;
        };

        return {
            templateUrl: 'features/header/headerTemplate.html',
            restrict: 'E', // Can be used as HTML element or as an attribute
            controller: controller,
            controllerAs:'vm',
            bindToController: true
        };
});
}());