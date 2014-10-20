'use strict';

angular.module('moneyTrackerApp')
    .factory('Accounts', function ($resource) {
        return new $resource('http://54.213.180.187:3000/accounts');
    });