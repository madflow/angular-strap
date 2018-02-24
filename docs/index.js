import angular from 'angular';
import angularAnimate from 'angular-animate';
import uiRouter from '@uirouter/angularjs';
import angularHljs from 'angular-highlightjs';
import $ from 'jquery';
import hljs from 'highlight.js';

import bootstrapRebootCss from 'bootstrap/scss/bootstrap-reboot.scss';
import bootstrapGridCss from 'bootstrap/scss/bootstrap-grid.scss';
import bootstrapCss from 'bootstrap/scss/bootstrap.scss';
import highlightCss from 'highlight.js/styles/github.css';
import angularMotionCss from 'angular-motion/dist/angular-motion.css';

import docCss from './styles.css';

// Library
import strapDimensions from 'helpers/dimensions';
import strapCore from 'helpers/compiler';
import strapAlert from 'alert/alert';
import strapModal from 'modal/modal';
import strapTooltip from 'tooltip/tooltip';

// Docs
import alertDoc from 'alert/docs/alert';
import modalDoc from 'modal/docs/modal';
import tooltipDoc from 'tooltip/docs/tooltip';

import routes from './routes';

angular.module('mgcrea.ngStrap', ['mgcrea.ngStrap.modal', 'mgcrea.ngStrap.alert', 'mgcrea.ngStrap.tooltip']);

angular
  .module('docs', ['mgcrea.ngStrap', 'hljs', uiRouter, angularAnimate, alertDoc, modalDoc, tooltipDoc])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .config(routes);
