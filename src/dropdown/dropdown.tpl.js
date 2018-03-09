import angular from 'angular';
import tpl from './dropdown.tpl.html';
import MODULE_NAME  from './dropdown.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('dropdown/dropdown.tpl.html', tpl);
  }
]);

