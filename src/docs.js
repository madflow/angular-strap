import angular from 'angular';
import $ from 'jquery';
import bootstrapRebootCss from 'bootstrap/scss/bootstrap-reboot.scss';
import bootstrapGridCss from 'bootstrap/scss/bootstrap-grid.scss';
import bootstrapCss from 'bootstrap/scss/bootstrap.scss';

import dimensions from './helpers/dimensions';
import core from './helpers/compiler';
import alert from './alert/alert';
import modal from './modal/modal';
import tooltip from './tooltip/tooltip';

import alertDoc from './alert/docs/alert.component';
import alertTpl from './alert/alert.tpl.html';
import alertDemoTpl from './alert/docs/alert.demo.tpl.html';

angular
  .module('docs', [
    'mgcrea.ngStrap.core',
    'mgcrea.ngStrap.helpers.dimensions',
    'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.alert',
    'mgcrea.ngStrap.tooltip'
  ])
  .component('alertDoc', alertDoc)
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  });

angular.module('docs').run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put('alert/alert.tpl.html', alertTpl);
    $templateCache.put('alert/docs/alert.demo.tpl.html', alertTpl);
  }
]);
