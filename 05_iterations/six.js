const code=["js","ff","gg","rr","ee","tr"]

const values=code.forEach((item)=>{
    //console.log(item)
});

//console.log(values)


//filters
const mynum=[1,2,3,4,5,6]
const nums=mynum.filter((num)=>num>5)
//but what if
const nums1=mynum.filter((num)=>{
    return num>4//if we are adding the {}for condition then we have to use the return, as lernt previously
})//if we are opening the scope {} then we have to use the return keyword
//console.log(nums)
//console.log(nums1)

//forEach
const n=mynum.forEach((item)=>{
    return item>3// this wont work with the foreach 
})
//console.log(n)

//lets see how its with the forEach
const newnum=[]
mynum.forEach((num)=>{
    if(num>2){// this is how we put the condition in the forEach
        newnum.push(num)
    }
}
)
//console.log(newnum)


const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    price: 550,
    rating: 4.8,
    publishedYear: 2008,
    pages: 464,
    inStock: true
  },
  {
    id: 2,
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    genre: "Programming",
    price: 450,
    rating: 4.6,
    publishedYear: 2015,
    pages: 278,
    inStock: true
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    genre: "Programming",
    price: 380,
    rating: 4.4,
    publishedYear: 2018,
    pages: 472,
    inStock: false
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    price: 320,
    rating: 4.7,
    publishedYear: 2018,
    pages: 320,
    inStock: true
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-Help",
    price: 300,
    rating: 4.5,
    publishedYear: 2016,
    pages: 304,
    inStock: false
  },
  {
    id: 6,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    price: 600,
    rating: 4.9,
    publishedYear: 1999,
    pages: 352,
    inStock: true
  },
  {
    id: 7,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    price: 280,
    rating: 4.8,
    publishedYear: 1997,
    pages: 309,
    inStock: true
  },
  {
    id: 8,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    price: 250,
    rating: 4.3,
    publishedYear: 1988,
    pages: 208,
    inStock: false
  }
];


const m=books.filter((i)=>{
    return i.id>=4})
console.log(m)

const s =books.filter((j)=>j.rating>4 && j.price>=100)
console.log(s)