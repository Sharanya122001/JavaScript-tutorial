// for of loop

const arr=[1,2,3,4,5,6]
for(const i of arr){
    //console.log(i)
}


const greeting="hello world!"
for(const i of greeting){
    //console.log(i)
}

//maps--- it holds the ket-value pair

const map=new Map()
map.set('IN',"India")
map.set('USA',"america")
map.set('Fr',"France")
//map.set('IN',"India")-- can't add this even if i do it will not show because the map wil only take unique values

//console.log(map)

for(const key of map){
    //console.log(key)
}

for(const key in map){
    console.log(key)
}
for(const [key,value] of map){// if we put the []for key and the vlaue then its array destructing 
    //console.log(key, ":--", value)
}


const myo={
    'g1':'nsf',
    'g2':'spiderman'
}

// for(const key of myo){
//     //console.log(key)
// }// from this wecan say that objects are iterable and maps are iterable

