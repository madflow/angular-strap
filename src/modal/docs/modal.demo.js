'use strict';

const controller = function($scope, $modal) {
  this.$onInit = function() {
    $scope.modal = { title: 'Title', content: 'Hello Modal<br />This is a multiline message!' };

    // Controller usage example
    //
    function MyModalController($scope) {
      $scope.title = 'Some Title';
      $scope.content = 'Hello Modal<br />This is a multiline message from a controller!';
    }
    MyModalController.$inject = ['$scope'];
    var myModal = $modal({ controller: MyModalController, templateUrl: 'modal/docs/modal.demo.tpl.html', show: false });
    $scope.showModal = function() {
      myModal.$promise.then(myModal.show);
    };
    $scope.hideModal = function() {
      myModal.$promise.then(myModal.hide);
    };
  };
};

controller.$inject = ['$scope', '$modal'];

export default controller;
