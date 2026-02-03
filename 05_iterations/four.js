const myo={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myo){// we can see that w have to use the in keyword in the condition of the for loop to get the object values over iteration
    //console.log(key,":",myo[key])
}

const arr =["js","kk","yy","rr"]

for(const i in arr){// this in keyword give the index values where as "of" give the value
    console.log(arr[i])
}

const map=new Map()
map.set('IN',"India")
map.set('USA',"america")
map.set('Fr',"France")
for (const key in map){
    //console.log(key)it will not iterate in this way 
}