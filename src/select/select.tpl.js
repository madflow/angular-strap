import angular from 'angular';
import tpl from './select.tpl.html';
import MODULE_NAME  from './select.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('select/select.tpl.html', tpl);
  }
]);

