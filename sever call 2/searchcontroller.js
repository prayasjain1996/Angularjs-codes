app.controller("myctrl",($scope,myfactory)=>{
               $scope.docall=()=>{
			var promise = myfactory.callserver($scope.search);
			console.log("I Got the Promise...");
			for(var i = 1; i<=10; i++){
				console.log("Time Pass",2*i);
			}
			promise.then((data)=>{
				$scope.result = data;
				console.log("Get the Data in Promise...")
			},(err)=>{
				$scope.result = err;
				console.log("Get the Err in Promise...");
			})
			
		}
	});
               
            