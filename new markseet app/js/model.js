app.factory("myfactory",()=>{
    var object = {
        Sno:1,
        studentary:[],
        sum(physics,chemistry,math){
         var sum = Number(physics)+Number(chemistry)+Number(math);
            return sum;
        },
        percent(sum){
            var percentresult = sum/3;
            return percentresult;
        },
        status(percentresult){
            if(percentresult<30){
                return "fail";
            }
            else{
                return "pass";
            }
        },
        addstudent(name,clas,rollno,sex,date,physics,chemistry,math,sum,percentresult,status){
var student = new Student(this.Sno,name,clas,rollno,sex,date,physics,chemistry,math,sum,percentresult,status);
            this.studentary.push(student);
            this.Sno++;
            return student;
        },
        deletestudent(){
            this.studentary = this.studentary.filter(function(student){
                                                     return student.markfordeletion==false;
                
            });
        },
        receiveValue(){
           var obj = this.studentary.filter((student)=>{
                return student.markforedit==true;
            })[0];
            console.log(obj);
return obj;
        },
        updatestudent(name,clas,rollno,sex,date,physics,chemistry,math,sum,percent,status,obj){
         obj.markforedit = false;
            obj.name = name;
            obj.clas = clas;
            obj.rollno = rollno;
            obj.sex = sex;
            obj.date = date;
            obj.physics = physics;
            obj.chemistry = chemistry;
            obj.math = math;
            obj.sum = sum;
            obj.percent = percent;
            obj.status = status;
            this.studentary[obj.Sno-1] = obj;
        
        }
        
    }
    return object;
});