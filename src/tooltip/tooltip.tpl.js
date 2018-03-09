import angular from 'angular';
import tpl from './tooltip.tpl.html';
import MODULE_NAME  from './tooltip.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('tooltip/tooltip.tpl.html', tpl);
  }
]);

