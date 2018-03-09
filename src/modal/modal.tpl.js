import angular from 'angular';
import tpl from './modal.tpl.html';
import MODULE_NAME from './modal.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('modal/modal.tpl.html', tpl);
  }
]);
