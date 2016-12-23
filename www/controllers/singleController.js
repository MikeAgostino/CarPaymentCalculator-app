angular.module('app.controllers')
app.controller("singleCtrl", ['$scope', '$http', function singleCtrl($scope) {

    $scope.CarInfo = {};
    $scope.CarInfo.value = 0;
    $scope.CarInfo.financeRate = 0;
    $scope.CarInfo.years = 1;
    $scope.CarInfo.tax = 0;
    $scope.CarInfo.down = 0;

    $scope.getMonthlyInterest = function () {
        var monthly_interest = ($scope.CarInfo.financeRate / 100) / 12;

        var monthly_payments = 0.0;
        var months = $scope.CarInfo.years * 12;
        var monthly_interest = ($scope.CarInfo.financeRate / 100) / 12;

        if ($scope.CarInfo.financeRate == 0) {
            monthly_payments = ($scope.CarInfo.value - $scope.CarInfo.down) / months;
        }
        else {
            monthly_payments = ($scope.CarInfo.value - $scope.CarInfo.down) * (((monthly_interest) * Math.pow(1 + monthly_interest, months)) / (Math.pow(1 + monthly_interest, months) - 1));
        }
        $scope.monthly = Math.round(monthly_payments);
        return $scope.monthly;
    };

    $scope.convertToBiweekly = function convertToBiweekly(payments) {
        return (payments * 12) / 26;
    };

    $scope.calculate = function calculate() {
        $scope.monthly = $scope.getMonthlyInterest();
        $scope.biweekly = $scope.convertToBiweekly($scope.monthly);
    };

    $scope.monthly = 0
    $scope.biweekly = 0

}]
);
