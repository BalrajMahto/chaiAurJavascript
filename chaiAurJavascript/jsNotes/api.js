const requestUrl='https://api.github.com/users/hiteshchoudhary'
const xhr=new XMLHttpRequest();
xhr.open('GET',requestUrl)
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText); 
        console.log(typeof data);
        console.log(data.followers);
        
        document.querySelector(".card img").setAttribute("src" , `${data.avatar_url}`);
        document.querySelector("h3").innerHTML = `${data.name} , Followers : ${data.followers}`;
        document.querySelector("h3").style.fontWeight = `bold`;
        document.querySelector("p").innerHTML = `${data.bio}  ${data.blog}`
        
        
    }
}
xhr.send();
