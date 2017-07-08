app.controller("myctrl",($scope,myfactory,$localStorage)=>{
     $scope.store = $localStorage;
    var studentsno= 0;
    $scope.disableButtons = false;
    $scope.compute=()=>{
          $scope.sum = myfactory.sum($scope.math,$scope.chemistry,$scope.physics);
         $scope.percent = myfactory.percent($scope.sum);
        $scope.status = myfactory.status($scope.percent);
    }
 $scope.addrecord=()=>{ myfactory.addstudent($scope.name,$scope.clas,$scope.rollno,$scope.sex,$scope.date,$scope.physics,$scope.chemistry,$scope.math,$scope.sum,$scope.percent,$scope.status);
         $scope.students= myfactory.studentary;
       $scope.clear();
                       
                       
    
    }
$scope.showmarking=(student)=>{
student.toggle();
}

$scope.edit=(student)=>{
student.toggleedit();
     obj = myfactory.receiveValue();
    $scope.name = obj.name;
    $scope.clas = obj.clas;
    $scope.rollno = obj.rollno;
    $scope.sex = obj.sex;
    $scope.date = obj.date;
    $scope.physics = obj.physics;
    $scope.chemistry = obj.chemistry;
        $scope.math = obj.math;
    $scope.sum = obj.sum;
    $scope.percent = obj.percent;
    $scope.status = obj.status;
   
  
    
}

$scope.deleterecord=()=>{
   myfactory.deletestudent();
    $scope.students= myfactory.studentary;
}

$scope.clear=()=>{
     $scope.name = "";
    $scope.clas = "";
    $scope.rollno = "";
    $scope.sex = "";
    $scope.date = "";
    $scope.physics = "";
    $scope.chemistry = "";
     $scope.math = "";
    $scope.sum = "";
    $scope.percent = "";
    $scope.status = "";

}
$scope.saverecord=()=>{
//localStorage.setItem("studentary",JSON.stringify(studentary));
    $scope.store.first = myfactory.studentary;
    //localStorageservice.set("wimmtkey",$scope.students);
}
$scope.loadrecord=()=>{
    $scope.students = $localStorage.first;
myfactory.studentary = $scope.students; 
   this.markfordeletion = true;
}
$scope.updaterecord=()=>{
    myfactory.updatestudent($scope.name,$scope.clas,$scope.rollno,$scope.sex,$scope.date,$scope.physics,$scope.chemistry,$scope.math,$scope.sum,$scope.percent,$scope.status,obj);
    $scope.students = myfactory.studentary;
    $scope.clear();
}
});