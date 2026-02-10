let s=document.querySelectorAll(".box");

//mouseover and mouseout
// s.forEach(box=>{
//     box.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="green"
//     })
// })
// s.forEach(box=>{
//     box.addEventListener("mouseout",event=>
//         event.target.style.backgroundColor="antiquewhite"
//     )
// })

//on click event
// s.forEach(box=>{
//     box.addEventListener("click",event=>{
//         event.target.style.backgroundColor="brown";
//     })
    
// })

//click any box and get the background-color of the page changed
// s.forEach(box=>
//     box.addEventListener("click",event=>{
//         const boxcolor=getComputedStyle(event.target).backgroundColor;
//         document.body.style.backgroundColor=boxcolor;
//     })
// )

//in another way without using the getCOmputedStyle
s.forEach(box=>
    box.addEventListener("click",event=>{
        document.body.style.backgroundColor = event.target.id;
        // if(event.taregt.id=="grey"){
        //     document.body.style.backgroundColor=event.target.id;
        // }
        // if(event.taregt.id=="white"){
        //     document.body.style.backgroundColor=event.target.id;
        // }
        // if(event.taregt.id=="yellow"){
        //     document.body.style.backgroundColor=event.target.id;
        // }
        // if(event.taregt.id=="red"){
        //     document.body.style.backgroundColor=event.target.id;
        // }

    }
    )
)