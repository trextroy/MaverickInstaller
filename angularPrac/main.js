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

	app.directive('panel', [function () {
		return {
			restrict: 'E',
			scope:{
				title: "@"
			},
			transclude:true,
			template: "<div style='border: 3px solid black'><div class='alert-info'>{{title}}"
			+"</div><div ng-transclude></div></div>"
		};
	}]);


	//You only have to pass $http here in function, no need to pass it through link function. 

	app.directive('infobutton', ['$http', function ($http) {
		return {
			restrict: 'E',
			scope:{
				title: "@"
			},
			transclude:true,
			template: "<div style='border: 3px solid black'>Hello</div>",
			link: function (scope, iElement, iAttrs, ctrl) {
				//this 'ctrl' can access everything you set at TechsController function. 
				 iElement.on('click', function(e) {
				 	console.log('element clicked');
				 	console.log(iAttrs.title);
				 	$http
				      .get('json/techs.json')
				      .then(function (response) {
				        scope.alltechs = response.data;
				        console.log(ctrl);
				      });
		          e.stopPropagation(); //stop event from bubbling up to document object
		         });
			},
			template:"<div style='backgroundcolor:'red'>hello</div>",
			controller: TechsController
		};
	}]);


	
/** @ngInject */
  function TechsController($scope,$http) {
    var vm = this;
    console.log("dont call service. ")
    $http
      .get('json/techs.json')
      .then(function (response) {
        $scope.techs = response.data; // this scope will share the data inside the link onclick function.
        vm.techs = response.data;
      });
  };



})(myapp);
