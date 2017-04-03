var myapp = angular.module("myapp",[]);

(function(app){
	'use strict';

	app.directive('clock', [function () {
		return {
			restrict: 'E',
			scope:{
				timezone:"@",
			},
			/*template:"<div>12pm {{timezone}}</div>"*/
			templateUrl:"sampletemplate.html"
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
				//this 'ctrl' you can use if if you get if from another directive. 
				 iElement.on('click', function(e) {
				 	console.log('element clicked');
				 	console.log(iAttrs.title);
				 	$http
				      .get('json/techs.json')
				      .then(function (response) {
				        scope.alltechs = response.data; // set the service value in scope. 
				        console.log(ctrl); // ctrl.techs - you can set the service value in controller variable. 
				        alert('info display');
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
      	//setting the value in scope
        $scope.techs = response.data; // this scope will share the data inside the link onclick function.
        //setting the value in controller variable. We should not do this as data should go in scope.
        //however we can define diff methods here which can be useful in link. 
        //this is usuefule perticularly when two directives are sharing the controller. 
        vm.techs = response.data; // this is where we creating new techs variable inside controller function. 
      });
  };

 /*
 	require: "fooController", this kind of this inside the directive can use the controller from another directive. 
	http://jsfiddle.net/YGQT9/
	http://jsfiddle.net/vojtajina/js64b/14/
	http://plnkr.co/edit/IOccnZq2LLnwje7T9sxo?p=preview
	http://jsfiddle.net/TahmidTanzim/N9Vqk/
	https://codepen.io/PageOnline/pen/nCfAj
*/
})(myapp);
