const digi=document.getElementById("clock")


//setInterval takes any method and also at how many interval method should run 
setInterval(function(){
let date=new Date()
digi.innerHTML=date.toLocaleTimeString();//this method to get the local date and time
},1000)