(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckCtrl', LunchCheckCtrl);
LunchCheckCtrl.$inject = ['$scope', '$filter'];
function LunchCheckCtrl($scope, $filter){
  $scope.checkLunch = function(){
    if($scope.lunchItems == null){
        $scope.message = "Too few items to determine!";
    }else {
      var len = $scope.lunchItems.split(",").length;
      if(len <= 3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!!";
      }
    }
  }
}
})();
