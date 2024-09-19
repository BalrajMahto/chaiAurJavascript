// document.getElementById("pic").onclick=function(){
//     alert("clicked once")
// }

// document.getElementById("pic").addEventListener('click',function(){
//     alert("clicked once again")
//  })
// attachEvent()
// jQuery
// type,timeStamp,defaultPrevent,target,toElement,srcElement,currentTarget
// client-X,client-Y,screenX,screenY
// altKey,shiftKey,keyCode

// document.getElementById("google").addEventListener('click',function(e){
    
//     e.preventDefault();
//     e.stopPropagation()
//     alert("google clicked");
// },false)
document.querySelector("#newImages").addEventListener("click",function(e){
    console.log(e.target.parentNode);
    if(e.target.tagName === 'IMG'){
        let removeIt=e.target.parentNode
        removeIt.remove()

    }
 
    

    
})