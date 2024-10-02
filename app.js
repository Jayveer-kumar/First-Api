let url="https://catfact.ninja/fact";
let btn=document.querySelector("button");
let p=document.querySelector("#fact");
async function getFact(){
    let res=await fetch(url);
    let data=await res.json();
     return data.fact;
}
 btn.addEventListener("click",async()=>{
    let ans= await getFact();
    p.innerText=ans;
})
 
