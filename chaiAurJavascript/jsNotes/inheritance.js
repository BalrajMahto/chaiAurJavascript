class student{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
    
}
class teacher extends student{
    constructor(username,password,email){
        super(username)
        this.email=email
        this.password=password
    }
    addCourses(){
        console.log(`A new course is implemented ${this.username}`);
        
    }


}


const teacherStudent=new teacher("balraj",1234,"balraj@11")
teacherStudent.addCourses()
// const topper=new User("balrajMAHTO")
// topper.logMe()

console.log(teacherStudent instanceof student);
