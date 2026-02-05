//reduce keyword
const n=[1,2,3]
const v= n.reduce(function(acc,currval){
    //console.log(`acc ${acc} and currval ${currval}`)
    return acc+ currval

},4)

//console.log(v)


//same using the arrow function
const b=n.reduce((ac,cur)=>ac+cur,0)
console.log(b)


//calculating the total price
const cartItems = [
  {
    id: 101,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    quantity: 2,
    discount: 10, // percentage
    inStock: true
  },
  {
    id: 102,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 1999,
    quantity: 1,
    discount: 15,
    inStock: true
  },
  {
    id: 103,
    name: "Laptop Backpack",
    category: "Accessories",
    price: 1499,
    quantity: 1,
    discount: 5,
    inStock: false
  },
  {
    id: 104,
    name: "Notebook",
    category: "Stationery",
    price: 99,
    quantity: 5,
    discount: 0,
    inStock: true
  },
  {
    id: 105,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    quantity: 1,
    discount: 20,
    inStock: true
  },
  {
    id: 106,
    name: "Water Bottle",
    category: "Home",
    price: 299,
    quantity: 3,
    discount: 0,
    inStock: true
  }
];
const c= cartItems.reduce((ar,item)=>ar+item.price,0)
console.log(c)