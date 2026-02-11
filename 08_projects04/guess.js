const randomnum=parseInt(Math.random()*100+1);

const submit=document.querySelector("button")
const input=document.querySelector("in")
const guessslot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowhi=document.querySelector(".loworhi")
const startover=document.querySelector("#remaining")

const p=document.createElement('p')

let prevgues=[]
let numguess=1

let playgame=true;

if(playgame){
    submit.addEventListener('click',event=>{
        event.preventDefault()
        
    })
}
function validateguess(guess){
//
}
function checkguess(guess){
    //
}

function displayguess(guess){
    //
}

function displaymessage(message){
    //
}

function endgame(){
    //
}

function newgame(){
    //
}
