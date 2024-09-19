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
    let intervalId=setInterval(changeByColor,1000)
    function changeByColor(){
    document.body.style.backgroundColor=randomColor();
    }
};
const endColour=function(){
    clearInterval(intervalId)
};


document.getElementById("#start").addEventListener("click",startColour);
document.getElementById("#stop").addEventListener("click",endColour);