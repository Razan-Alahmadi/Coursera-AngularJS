
(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('LunchCheckController', function ($scope) {
        $scope.lunchlist ="";
        $scope.message="";

        $scope.displayChecking = function () {
        var totalNameValue = check($scope.lunchlist);
        $scope.totalValue = totalNameValue;
      };
    
    
      function check(string) {
        var alllunchlist=string.split(',');
        var count = 0;
        for (var i = 0; i < alllunchlist.length; i++) {
          count ++;
        }


          if($scope.lunchlist.length==0){
            $scope.message="Please enter data first";
        }   
         else if(count<=3){
            $scope.message="Enjoy!";
         }
         else{$scope.message="Too much!";}
        }
    
    });
    
    
    })();