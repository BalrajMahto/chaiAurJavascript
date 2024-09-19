// const newNum=[1,2,3,4,5,6,7,8,9]
// const number=newNum.map((num)=>num-10)
// console.log(number);

// const newNum=[1,2,3,4,5,6,7,8,9]
// const number=newNum.map((num)=>{
//     return num+10
// })
// console.log(number);

// const newNum=[1,2,3,4,5,6,7,8,9]
// const number=newNum
//                     .map((num)=>num*10)
//                     .map((num)=>num+5)
//                     .filter((num)=>num>55)    
// console.log(number);


// const newNum=[1,2,3]
// const number=newNum.reduce((acc,curval)=>{
//    return acc+curval
// },0)
// console.log(number);

const newNum=[1,2,3,4,5,6]
const number=newNum.reduce((acc,curval)=> acc+curval,0)
//console.log(number);

const shopingCart=[
    {
        item:"maggie",
        price:55
    },
    {
        item:"chowmin",
        price:30
    },
    {
        item:"pasta",
        price:102
    },
    {
        item:"coldrink",
        price:80
    },
]
const totalAmt=shopingCart.reduce((acc,items)=>acc+items.price,0)
console.log("total amount to be paid : "+totalAmt );
