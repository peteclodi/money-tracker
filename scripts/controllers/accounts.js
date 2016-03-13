'use strict';

angular.module('moneyTrackerApp')
    .controller('AccountsCtrl', function ($scope, Accounts) {
        $scope.accounts = Accounts.query();
    });
