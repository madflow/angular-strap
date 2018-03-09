import angular from 'angular';
import tpl from './timepicker.tpl.html';
import MODULE_NAME  from './timepicker.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('timepicker/timepicker.tpl.html', tpl);
  }
]);

