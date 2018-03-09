import angular from 'angular';
import tpl from './popover.tpl.html';
import MODULE_NAME  from './popover.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('popover/popover.tpl.html', tpl);
  }
]);

