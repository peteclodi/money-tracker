'use strict';

angular.module('moneyTrackerApp')
    .factory('Accounts', function ($resource) {
        return new $resource('/data/accounts.json');
    });