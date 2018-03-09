export default function($stateProvider) {
  var alertState = {
    name: 'alerts',
    url: '/akerts',
    component: 'alertDoc'
  };

  var modalState = {
    name: 'modals',
    url: '/modals',
    component: 'modalDoc'
  };

  var tooltipState = {
    name: 'tooltips',
    url: '/tooltips',
    component: 'tooltipDoc'
  };

  $stateProvider.state(alertState);
  $stateProvider.state(modalState);
  $stateProvider.state(tooltipState);
}
