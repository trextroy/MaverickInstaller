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
					'title':$scope.title,
					'desc': $scope.description,
				});
				console.log($scope.panelList);
			};
			$scope.cancelBtnClick = function(){
				$scope.title = "";
				$scope.description = "";
			};

		}])

	
})();
