angular.module('app.controllers')
app.controller("singleCtrl", ['$scope', function singleCtrl($scope) {
    $scope.CarInfo = {
        value: 0,
        financeRate: 0,
        years: 1,
        tax: 0,
        down: 0
    };

    $scope.getMonthlyInterest = getMonthlyInterest;
    $scope.convertToBiweekly = convertToBiweekly;

    $scope.monthly = getMonthlyInterest(value,financeRate,years);
    $scope.biweekly = convertToBiweekly($scope.monthly);
    

    $scope.calculate = function calculate($scope) {
         var monthly_interest = (interest / 100) / 12;
    };

    $scope.getMonthlyInterest = function getMonthlyInterest(price,interest,years){
            var monthly_payments = 0.0;
            var months = years * 12;
            var monthly_interest = (interest / 100) / 12;
            monthly_payments = (price) * (((monthly_interest) * Math.Pow(1 + monthly_interest, months)) / (Math.Pow(1 + monthly_interest, months) - 1));
            return Math.Round(monthly_payments, 2);
    };

    $scope.convertToBiweekly = function convertToBiweekly(payments){
            var biweekly = (payments * 12) / 26;
            return Math.Round(biweekly, 2);
    };
}]
);
