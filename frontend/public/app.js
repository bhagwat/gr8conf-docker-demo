angular.module('gr8app', []).controller('TodoCtrl', function($scope, $http) {
  	$scope.todos=[];
  	$scope.form={};

  $scope.init = function(){
  	$http({
  		method: 'GET',
  		url: '/todoAction'
}).then(function successCallback(response) {
	$scope.todos=response.data.todos.reverse();
  });
  };  
    $scope.addTodo = function(){
  	$http({
  		method: 'POST',
  		url: '/todoAction',
  		data: $scope.form
}).then(function successCallback(response) {
	console.log(response.data);
	if(response.data.todo){
		$scope.todos.unshift(response.data.todo);
	}
  });
  };  
    $scope.toggleDone = function(todo){
  	$http({
  		method: 'PUT',
  		url: '/todoAction',
  		data: todo
}).then(function successCallback(response) {
	console.log(todo);
	console.log(response.data);
	if(response.data.todo){
		todo=response.data.todo
	}
  });
  };  

});