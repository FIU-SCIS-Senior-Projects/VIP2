angular.module('routes', ['ui.router', 'UserProfileController'])

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
        .state('how-vip-credits-count', {
            url:'/how-vip-credits-count',
            templateUrl: 'features/how-vip-credits-count/index.html'
        })
        .state('evaluation', {
            url:'/peer-evaluations',
            templateUrl: 'features/evaluation-page/evaluation.html'
        })
        .state('graduateApplication', {
            url:'/graduate-application',
            templateUrl: 'features/graduate-application/graduateApplication.html'
        })
        .state('undergraduateApplication', {
            url:'/undergraduate-application',
            templateUrl: 'features/undergraduate-application/undergraduateApplication.html'
        })
        .state('userProfile', {
            url:'/profile',
            templateUrl: 'features/profile-page/userProfile.html',
            controller: 'UserCtrl',
            controllerAs: 'user'
        });
    });
