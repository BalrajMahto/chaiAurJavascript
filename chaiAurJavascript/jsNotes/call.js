function setUserDetails(username){
    this.username=username
    console.log("calling setUser");
    

}

function createUser(username,email,password){
    setUserDetails.call(this,username)
    this.username=username
    this.email=email
    this.password=password
    


}
const chai=new createUser("balraj","balraj@gmail.com",1234)
console.log(chai);
