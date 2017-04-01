(function(){

angular
.module("myapp")
.directive('clock', clockfunction);

function clockfunction() {
    var directive = {
        link: link,
        scope:{
                timezone:"@",
            },
        template:"<div>12pm {{timezone}}</div>",
        restrict: 'E'
    };
    return directive;

    function link(scope, element, attrs) {
      /* */
    }
}    
})();



