import angular from 'angular';
import tpl from './tab.tpl.html';
import MODULE_NAME  from './tab.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('tab/tab.tpl.html', tpl);
  }
]);

