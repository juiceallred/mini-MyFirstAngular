angular.module('friendsList').controller('mainCtrl', function($scope) {
  $scope.friends = ['Kyle Browne', 'Haidyn Knuteson', 'Nick Banz'];

  $scope.newFriend = '';
  $scope.addFriend = function(name) {
    $scope.friends.push(name);
  }

});
