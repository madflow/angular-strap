export default function($scope, $tooltip) {
  $scope.tooltip = { title: 'Hello Tooltip<br />This is a multiline message!', checked: false };

  // Controller usage example
  /*
  var myTooltip = $tooltip(angular.element(document.querySelector('#test')), {title: 'Hello tooltip', placement: 'right'});
  $scope.showTooltip = function() {
    myTooltip.$promise.then(myTooltip.show);
  };
  $scope.hideTooltip = function() {
    myTooltip.$promise.then(myTooltip.hide);
  };
  */
}
