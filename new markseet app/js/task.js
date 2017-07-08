class Student{
constructor(Sno,name,clas,rollno,sex,date,physics,chemistry,math,sum,percent,status){
    this.Sno = Sno;
    this.name = name;
    this.clas = clas;
    this.rollno = rollno;
    this.sex = sex;
    this.date = date;
    this.physics = physics;
    this.chemistry = chemistry;
    this.math = math;
    this.sum = sum;
    this.percent = percent;
    this.status = status;
    this.markfordeletion = false;
    this.markforedit = false;
}
      
   toggle(){
		this.markfordeletion=!this.markfordeletion;
       this.markforedit = false;
       
             
}
    toggleedit(){
             this.markforedit = !this.markforedit;
        this.markfordeletion = false;
}
    red(){
        return this.markfordeletion && !this.markforedit;
    }
    green(){
         return !this.markfordeletion && this.markforedit;
}

}