var app = angular.module("clockapp", []);
app.controller("timectrl", timectrl);

function timectrl($scope) {
    var currentdate = new Date();
    $scope.timestring = currentdate.toTimeString();
    $scope.updatetime = function()
    {
         var currentdate = new Date();
         $scope.userName = "";
         $scope.timestring = currentdate.toTimeString();
    }
}