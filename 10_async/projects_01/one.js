//generate a random color

//using rgd
// function randomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);

//     return `rgb(${r}, ${g}, ${b})`;
// }

//using hex
const randcolor=function(){
    const hex= "0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let interval=null;
document.querySelector("#start")
.addEventListener("click",function(){
    if(!interval){
        interval=setInterval(function(){
        document.body.style.backgroundColor=randcolor()  
        },2000)
    }
})

document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(interval)
    interval=null;
    })