(function(){
	'use strict';

	angular
	.module('myapp')
	.directive('footercomp', footerfunction);

	
	function footerfunction(){
		var directive = {
			link:link,
			restrict:'E',
			scope:{
				setText : '@'
			},
			templateUrl:"views/footer/footer.html"
		
		};
		return directive;
		 function link(scope, element, attrs) {
		      /* */
		 }
	}


})();