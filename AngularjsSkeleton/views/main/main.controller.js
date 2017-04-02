(function() {
  'use strict';

  angular
    .module('myapp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1490061629090;
    
  }
})();
