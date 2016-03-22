angular.module('routes', ['ui.router'])

    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
            	url:'/',
            	templateUrl:'features/main-page/home.html'
            })
    });