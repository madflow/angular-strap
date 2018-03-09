import angular from 'angular';
import tpl from './alert.tpl.html';
import { MODULE_NAME } from './alert';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put(tpl);
  }
]);
