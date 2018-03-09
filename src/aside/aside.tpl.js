import angular from 'angular';
import tpl from './aside.tpl.html';
import MODULE_NAME  from './aside.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('aside/aside.tpl.html', tpl);
  }
]);

