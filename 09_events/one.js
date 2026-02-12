const o=document.getElementById("one");
const t=document.getElementById("two");
alert("JS file loaded");

o.addEventListener("click", event=>{
    alert("Dont click me");
})

// t.addEventListener("click",event=>{
//     alert("try to click button 1")
// })
// function hello(){
//     alert("hello user!!")
// }
// t.onclick="hello()"
//this is the old school of how the to give something on click
//but the disadvantage of this is only one click handler is allowed
//Overwrites previous handlers
//Mixes HTML & JavaScript

//example
//button.onclick = () => alert("First");
//button.onclick = () => alert("Second"); // ❌ First is gone


//Harder to manage in big apps
t.onclick=()=>{
    alert("hello user")
}


//addeventlistener
//✅ Pros
// ✅ Multiple event handlers allowed
// ✅ Cleaner separation of HTML & JS
// ✅ Supports event options
// ✅ Works with advanced features
// ✅ Used in real projects & frameworks
//in this addeventlistener there is another third parameter which default value is false
//onclick supports only one handler, while addEventListener allows multiple handlers and better control over events.

//read this
//type,timestamp,defaultprevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keycode

//eventCapturing and eventBubbling