(function(){
	'use strict';

	angular
		.module('myapp')
		.run(runBlock);
	

	function runBlock($log,$templateCache){
 		$log.debug('runBlock end');
 		//$templateCache.put('views/footer/footer.html', 'This is the content of the template');
	}	

})();
