const fruits=["apple","orange","banana"]
const veggi=["cucumber","lauki","potato"]
const junkk= ["momos","paratha","chole"]

fruits.push(veggi)
// console.log(fruits) // makes nested array 

const new_varrity=fruits.concat(veggi) //limited till 2 arrays only 
const new_variety=[...fruits,...veggi,...junkk] // can concatinate any number of arrays

// console.log(new_varrity)
// console.log(new_variety)

const arrray=[1,2,4,[5,22,32],[565,43,64,[8,9,]],678]
const newarrray=arrray.flat(Infinity)// makes all nested array a single one 
// console.log(newarrray)

// console.log(Array.isArray("APURV"))
// console.log(Array.from("APURV"))
// console.log(Array.from({name:"APURV"})) // cant convert in list returns empty list

let name="Apurv"
let name1="Divyanshi"
let name2="Urvashi"

console.log(Array.of(name,name2,name1))