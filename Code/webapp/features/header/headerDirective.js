(function() {
    angular.module('vipHeader', [])
    .directive('vipHeader', function () {
        return {
            templateUrl: 'features/header/headerTemplate.html',
            restrict: 'E' // Can be used as HTML element or as an attribute
        };
});
}());