var myapp = angular.module("myapp",[]);

(function(app){
	'use strict';

	app.directive('clock', [function () {
		return {
			restrict: 'E',
			scope:{
				timezone:"@",
			},
			template:"<div>12pm {{timezone}}</div>"
		};
	}]);



})(myapp);
