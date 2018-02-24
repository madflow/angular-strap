import angular from 'angular';

import tooltipTpl from 'tooltip/tooltip.tpl.html';
import tooltipDocTpl from 'tooltip/docs/tooltip.demo.tpl.html';

import tooltipDoc from './tooltip.component';

const MODULE_NAME = 'docs.tooltip';

angular
  .module(MODULE_NAME, [])
  .component('tooltipDoc', tooltipDoc)
  .config(function($tooltipProvider) {
    angular.extend($tooltipProvider.defaults, {
      html: true
    });
  })
  .run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('tooltip/tooltip.tpl.html', tooltipTpl);
      $templateCache.put('tooltip/docs/tooltip.demo.tpl.html', tooltipDocTpl);
    }
  ]);

export default MODULE_NAME;
