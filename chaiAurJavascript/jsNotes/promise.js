const promiseOne= new Promise(function(resolve,reject){
    //database call
    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
    
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()

    },1000)
}).then(function(){
    console.log("promise completed 2");
    
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"code",email:"example@mail.edu"})

    },1000)

})
promiseThree.then(function(user){
    console.log(user);
    

})


const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"balraj",email:"balraj@gmail.com"})
           
        }else{
            reject("something went wrong")
        }
    },1000)

})

promisefour.then((user) => {
    console.log(user);
    return user.username    

}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log('resolved error');
    
}).finally(()=>{
    console.log("promise is either resolved or rejected");
    
})


const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"balraj",passcode:"1234"})
           
        }else{
            reject("something went wrong 404")
        }
    },1000)

})

async function consumePromise(){
    try {
        const response=await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);

    }
    
}
consumePromise()

// async function getUserDetails() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
        
//         const data=await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("e:",error);
        
        
//     }
  
    

    
// }
// getUserDetails()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>console.log(error))
