import angular from 'angular';
import tpl from './datepicker.tpl.html';
import MODULE_NAME  from './datepicker.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('datepicker/datepicker.tpl.html', tpl);
  }
]);

