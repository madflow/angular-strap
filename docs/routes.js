export default function($stateProvider) {

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

  $stateProvider.state(modalState);
  $stateProvider.state(tooltipState);
}
