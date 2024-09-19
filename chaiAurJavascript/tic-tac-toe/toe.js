let boxes=document.querySelectorAll(".box")
let resetButton=document.querySelector("#reset")
let newbtn=document.querySelector("#new-Game")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")



let turnOfO=true
 const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

 ]

 
 boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        if(turnOfO===true){
            box.innerText="O"
            box.style.color = '#00ff00';
            turnOfO=false
            
        }
        else{
            box.innerText="X"
            box.style.color = '#ff0000';
            turnOfO=true
        }
        box.disabled=true
        checkFunction()
       
    })
 })

const resetGame=()=>{
    turnOfO=true
    boxEnabled()
    msgContainer.classList.add("hide")


}

const boxDisabed=()=>{
    for(let box of boxes){
        box.disabled=true
    }
    
}

const boxEnabled=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerHTML=""
    }
    
}

const showWinner=(winner)=>{
    msg.innerHTML=`Congrats,winner is ${winner}`
    msgContainer.classList.remove("hide")
    boxDisabed()

}


 const checkFunction= () =>{
    for(let pattern of winningPattern){
        let posValue1=boxes[pattern[0]].innerText
        let posValue2=boxes[pattern[1]].innerText

        let posValue3=boxes[pattern[2]].innerText

        if(posValue1!="" && posValue2!="" && posValue3!=""){
            if(posValue1===posValue2 && posValue2===posValue3){
                showWinner(posValue1)
                
            }
        }
     }
}

newbtn.addEventListener("click",resetGame)
resetButton.addEventListener("click",resetGame)
