var myapp = angular.module("myapp",[]);

(function(app){
	'use strict';

	app.factory('DATA_FACTORY', [function () {
		return {
			message:'I am alian from factory'
		};
	}])

	app.filter("reverse",function(){
		return function(text){
			return text.split("").reverse().join("");	
		}
	});

	app.controller("firstcontroller",function($scope,DATA_FACTORY){
		$scope.data={
			message:"akash"
		}
	});
	
	app.controller("secondcontroller",function($scope,DATA_FACTORY){
		$scope.data=DATA_FACTORY;
		$scope.myNewfunction = function(messageval){
			return messageval + " world";
		};
	});

})(myapp);
