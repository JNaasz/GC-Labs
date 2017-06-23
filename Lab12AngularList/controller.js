var app = angular.module('myModule');

app.controller('choreController', function($scope){

  $scope.choreList = [];
  $scope.addChore = function() {
    $scope.choreList.push($scope.chore);
  };

  $scope.removeChore = function(i){
    $scope.choreList.splice($scope.choreList.indexOf(i), 1);
  };

  })

app.controller('groceryController', function($scope) {

  $scope.groceries = [];
  $scope.addItem = function() {
    var item = {item: $scope.name, price: $scope.price};
    $scope.groceries.push(item);
    console.log($scope.groceries);
  }

  $scope.removeItem = function(item){
    $scope.groceries.splice($scope.groceries.indexOf(item), 1);
  }
  })
