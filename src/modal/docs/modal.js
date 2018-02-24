import angular from 'angular';
import modalTpl from 'modal/modal.tpl.html';
import modalDocTpl from 'modal/docs/modal.demo.tpl.html';
import modalOptions from 'modal/docs/modal.options.md';

import modalDoc from './modal.component';

const MODULE_NAME = 'docs.modal';

angular
  .module(MODULE_NAME, [])
  .component('modalDoc', modalDoc)
  .config(function($modalProvider) {
    angular.extend($modalProvider.defaults, {
      html: true
    });
  })
  .run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('modal/modal.tpl.html', modalTpl);
      $templateCache.put('modal/docs/modal.demo.tpl.html', modalDocTpl);
      $templateCache.put('modal/docs/modal.options.html',  modalOptions);
    }
  ]);

export default MODULE_NAME;
