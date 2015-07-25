(function() {
  'use strict';

  angular
    .module("app.directives")
    .directive("sampleDirective", sampleDirective);

  sampleDirective.$inject = [];

  function sampleDirective() {
    var directive = {
      restrict: 'AE',
      template: '',
      link: function(scope, elem, attr){}
    };
    return directive;
  }

})();

