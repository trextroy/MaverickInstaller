(function(){
	'use strict';

	angular
	.module('myapp')
	.directive('headercomp', headerfunction);

	/** @ngInject */
	function headerfunction(){
		var directive = {
			link:link,
			restrict:'E',
			scope:{
				setText : '@'
			},
			/*tempalteUrl:'header.html'*/
			template:'<nav class="navbar navbar-inverse" role="navigation">' +
						'<div class="navbar-header">' +
						   ' <a class="navbar-brand" ui-sref="#">AngularUI Router</a>' +
						'</div>' +
						'<ul class="nav navbar-nav">' +
						   '<li><a ui-sref="home">Home</a></li>' +
						   ' <li><a ui-sref="about">About</a></li>' +
						'</ul>' +
					'</nav>'

		};
		return directive;
		 function link(scope, element, attrs) {
		      /* */
		 }
	}


})();