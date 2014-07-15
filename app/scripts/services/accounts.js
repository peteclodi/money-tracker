'use strict';

angular.module('moneyTrackerApp')
    .factory('Accounts', function($resource) {
        return new $resource('http://peteclodi.com/code/money-tracker/test_data/accounts.json');
    });