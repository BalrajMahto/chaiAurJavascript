// oop
// object literals

// constructor
// prototypes
// classes
// instances(new,this)

// 4 pillars Abstraction,Encapsulation,inheritance,ploymorphism

const user={
    username:"balraj",
    loginCount:8,
    isLoggedIn:true,

    getUserDetails: function (){
        //console.log("got the user datails");
        //console.log(this);
        

        //console.log(`username:${this.username}`);
        
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting=function(){
        console.log(`welcome: ${this.username}`);
        
    }
    
    return this

}
const userOne=new User("balrajMahto",12,true)//new is used for stopping the override the data
const userTwo=new User("Mahtobalraj",12,true)
console.log(userOne);
console.log(userTwo);




