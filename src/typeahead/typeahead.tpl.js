import angular from 'angular';
import tpl from './typeahead.tpl.html';
import MODULE_NAME  from './typeahead.module';

angular.module(MODULE_NAME).run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('typeahead/typeahead.tpl.html', tpl);
  }
]);

