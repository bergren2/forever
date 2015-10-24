angular
  .module('Forever', [])
  .controller('InputCtrl', function ($scope) {
    var _input = 'Test input here.';
    $scope.editor = {
      input: function (newValue) {
        return arguments.length ? (_input = newValue) : _input;
      }
    };
  });
