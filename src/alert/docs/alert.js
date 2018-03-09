import angular from 'angular';
import alertTpl from 'alert/alert.tpl.html';
import alertDocTpl from 'alert/docs/alert.demo.tpl.html';

import alertDoc from './alert.component';

const MODULE_NAME = 'docs.alert';

angular
  .module(MODULE_NAME, [])
  .component('alertDoc', alertDoc)
  .run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('alert/docs/alert.demo.tpl.html', alertDocTpl);
    }
  ]);

export default MODULE_NAME;
