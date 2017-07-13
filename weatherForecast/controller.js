app.controller("myctrl",function($scope,myfactory){
    $scope.docall=()=>{
        var promise = myfactory.callserver($scope.city);
    
    promise.then((data)=>{
				$scope.result = data;
                $scope.showme=true;
				console.log("Get the Data in Promise...")
			},(err)=>{
				$scope.result = err;
				console.log("Get the Err in Promise...");
			});
    }
});
		
