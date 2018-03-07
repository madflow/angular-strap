import angular from 'angular';
import angularMocks from 'angular-mocks';
import anularSanitize from 'angular-sanitize';
import angularAnimate from 'angular-animate';
import jQuery from 'jquery';

import { countScopes } from './helpers';

Object.defineProperty(window, 'jQuery', { value: jQuery });
Object.defineProperty(window, '$', { value: jQuery });
Object.defineProperty(window, 'angular', { value: angular });

Object.defineProperty(window, 'countScopes', { value: countScopes });

jQuery.fn.triggerHandler = function(evt) {
  return angular.element(this[0]).triggerHandler(evt);
};
