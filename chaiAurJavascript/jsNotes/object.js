const user0=Symbol("bal2")

const user={
    name:"balraj",
    rollno:10,
    marks:90,
    [user0]:"friend"
}
console.log(typeof user[user0])
// Object.freeze(user)
// user.marks=20

// console.log(user);
// console.log(user["marks"]);

//function
user.greet=function(){
    console.log("hello");
}
console.log(user.greet());
user.greet2=function(){
    console.log(`hello,${this.name}`);
}
console.log(user.greet2());

// const tinder=new Object;//singelton
// const tinder={}
// console.log(Object.keys(user));
console.log(Object.values(user));

//destructuring of object
const {marks:markOfSubject}=user
console.log(markOfSubject);