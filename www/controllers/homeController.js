'use strict';

app.controller("homeCtrl", ['$ionicHistory', '$state', function homeCtrl($scope, $state,$ionicHistory) {
    $scope.uiRouterState = $state.current;
    $scope.goBack = function () {
        $window.history.go(-1);
    }
    
}]);

