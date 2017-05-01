(function(app){
	'use strict';

	angular
		.module('my-app', [])
		.controller('FormCtrl', ['$scope', function ($scope) {
			$scope.title = "This is title.";
			$scope.description = "This is description";
			$scope.panelList = [];
			$scope.addBtnClick = function(){
				$scope.panelList.push({
					title:$scope.title,
					desc: $scope.description,
				});
			};
			$scope.cancelBtnClick = function(){
				$scope.title = "";
				$scope.description = "";
			};

		}])
		.directive('checkboxcomp', [function () {
			return {
				restrict: 'E',
				scope:{
					titleval:"@",//this is passing everything in the form of string instead of object
					descval:"@"
				},
				//template:"<div>Title: {{titleval}} and its description: {{descval}}</div>",
				template:"<div class='panel panel-success'>" +
						    "<div class='panel-heading'>" +
						         "<h3 class='panel-title'>{{titleval}}</h3>" +
						    "</div>" +
						    "<div class='panel-body'>{{descval}}</div>" +
						"</div>",

				link: function (scope, iElement, iAttrs) {
					console.log(scope.$parent.panelList); // this gives all the data as object of parents
				}
				
			};
		}])
		.directive('clock', [function () {
			return {
				restrict: 'E',
				scope:{
					timezone:"@",
				},
				templateUrl:"sampletemplate.html"
			};
		}])
		
		

	
})();
