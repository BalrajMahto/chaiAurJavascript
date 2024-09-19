myNums=[1,2,3,4,5,6,7,8]
//const newnum = numbers.filter((num)=>num>4)
//console.log( newnum );

const numbers=[]
myNums.forEach((num) => {
    if(num>4){
        numbers.push(num)
    }

});
//console.log(numbers);


const books=[
    {title:"book1",author:"edision",publish:1999},
    {title:"book2",author:"peterson",publish:1999},
    {title:"book3",author:"author3",publish:2000},
    {title:"book4",author:"edision",publish:2004},
    {title:"book9",author:"maxwell",publish:2001},
    {title:"book7",author:"edision",publish:2024},


]
const newnum = books.filter((bk)=>{
    return bk.publish>2000
})
console.log(newnum);



