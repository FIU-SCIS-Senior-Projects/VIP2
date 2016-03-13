angular.module('routes', ['ui.router'])

    .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('competitionInformation', {
                        url:'/competitionInformation',
                        templateUrl: 'features/competition/competition.html'
                })
    });