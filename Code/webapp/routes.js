angular.module('routes', ['ui.router'])

    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('contact', {
                url:'/contact',
                templateUrl: 'features/contact/contact.html'
            })
            .state('competitionInformation', {
                url:'/competition-information',
                templateUrl: 'features/competition/competition.html'
            })
            .state('home', {
            	url:'/',
            	templateUrl:'features/main-page/home.html'
            })
            .state('evaluation', {
            url:'/peer-evaluations',
            templateUrl: 'features/evaluation-page/evaluation.html'
            })
    });