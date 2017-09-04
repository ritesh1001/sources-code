var app = angular.module("ng-model-exmpls",[]);

app.controller("exmlpscontrl",exmpls);

function exmpls($scope)
{
  $scope.valuechange = function()
  {
      console.log("textbox change..");
  }
}