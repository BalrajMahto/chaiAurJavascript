
// for loop

for (let a = 0; a <= 10; a++) {
    const element = a;
    if(a==5){
        // console.log("five star")
    }
    // console.log(element)
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop values  ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(i + "*" + j + "=" + i*j);
    }
}

let myarray=['shaktiman','power rangers','toonpur ka superhero','flying jatt']
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    // console.log(element);
}



// while loop

let i=0
while (i<10) {
    // console.log(i);
    i++
}
let myArray=['shaktiman','power rangers','toonpur ka superhero','flying jatt']
let a=0
while (a<myArray.length) {
    // console.log(myArray[a]);
    a=a+1
}


// for in loop


const Array=['shaktiman','power rangers','toonpur ka superhero','flying jatt']
for (const key in Array) {
    // console.log(Array);
 
}

const greetings = "hello world"
for (const greet in greetings) {
    // console.log(`print the given ${greet}`);
 
}

// const map=new Map()
// map.set("IN","INDIA")
// map.set("FR","FRANCE")
// map.set("AS","ASIA")
// console.log(map);


const myObject={
    name:"shaktiman",
    age:25,
    city:"delhi"
}
for (const key in myObject) {
    //console.log( `actual ${key} is ${myObject[key]}`);
    
}


