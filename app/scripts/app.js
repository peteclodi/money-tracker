'use strict';

angular
    .module('moneyTrackerApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/accounts', {
                templateUrl: 'views/accounts.html',
                controller: 'AccountsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function($rootScope, $route, $location) {
        $rootScope.activeTab = 'all';

        $rootScope.$on('$routeChangeSuccess', function() {
            $rootScope.activeTab = $location.url();
        });
    });
