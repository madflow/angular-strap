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
import bootstrapAdditons from '../src/extras/bootstrap-additions/bootstrap-additions.scss';

import docCss from './styles.css';

import ngStrap from '../src/index';
import ngStrapTemplates from '../src/templates';

// Docs
import alertDoc from 'alert/docs/alert';
import modalDoc from 'modal/docs/modal';
import tooltipDoc from 'tooltip/docs/tooltip';

import routes from './routes';

angular
  .module('docs', [
    'mgcrea.ngStrap',
    'hljs',
    uiRouter,
    angularAnimate,
    alertDoc,
    modalDoc,
    tooltipDoc
  ])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .config(routes);
