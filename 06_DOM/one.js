let buttons=document.querySelectorAll(".mybutton");
//console.log(buttons)
buttons.forEach(button=>{
    button.style.backgroundColor="green";
    button.textContent+="<>"
});

//click event listener

// buttons.forEach(button=>{
//     button.addEventListener("click", even=>{
//         event.target.style.backgroundColor="brown";
// });
// });

//mouseover and out event lister

// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>
//         event.target.style.backgroundColor="blue"
// )
// })

// buttons.forEach(button=>{
//     button.addEventListener("mouseout",event=>
//         event.target.style.backgroundColor="green"
// )
// })

//add an element
const newbutton=document.createElement("button");//adding new button in the html using the JS
newbutton.textContent="Button 5";// giving the name for the button
newbutton.classList="mybutton";//putting it into a class
document.body.appendChild(newbutton);// appending this button which we have created in the html file

button=document.querySelectorAll(".mybutton")

//remove an element

buttons.forEach(button=>
    button.addEventListener("click",event=>{
        event.target.remove();
        console.log(buttons)
    })
)

let p=document.querySelectorAll(".mybutton");
p.forEach(button=>{
    button.textContent+=">>>"
});