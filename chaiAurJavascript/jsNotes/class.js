 //class user{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
    
//     encrypted(){
//         return `${this.password}ghasfhdfemsvhg`
//     }
//     upperUsername(){
//         return `${this.username.toLowerCase()}`
//     }
// }

// const check=new  user("Balraj","balraj@gmail.com",123445)
// console.log(check);

// console.log(check.encrypted());
// console.log(check.upperUsername());


function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encrypted=function(){
    return `${this.password}abc`
}

const chai=new User("balraj","balraj@google.edu",159)
console.log(chai.encrypted());

console.log( );
