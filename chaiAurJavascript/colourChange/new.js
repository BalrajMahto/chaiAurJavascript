const randomColor=function(){
    const hex="0123456ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId;
const startColour=function(){
    if(!intervalId){
        intervalId=setInterval(changeByColor,1000)


    }
    
    
    function changeByColor(){
    document.body.style.backgroundColor=randomColor();
    }
};
const endColour=function(){
    clearInterval(intervalId)
    intervalId=null;
};


document.querySelector("#start").addEventListener("click",startColour);
document.querySelector("#stop").addEventListener("click",endColour);