 app.controller("myctrl",($scope,myfactory)=>{
            $scope.ShoesList=()=>{
                $scope.product = myfactory.ShoesList();
               console.log($scope.product);
              
            }
            $scope.mobilesList=()=>{
                $scope.product = myfactory.mobilesList();
              
            }
        });
        