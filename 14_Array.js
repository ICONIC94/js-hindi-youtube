const arr=[1,2,3,4,5]
const fruits=["apple","orange","banana"]
const veggi=["cucumber","lauki","potato"]
const junkk= new Array("momos","paratha","chole")
 
// Array methods
arr.unshift(0)
arr.shift()

console.log(fruits.indexOf("banana"))
console.log(veggi.includes("cucumber"))

const arr1=arr.join()
console.log(arr1)
console.log(typeof arr1) // returns string

// Slice and Splice
const newarr=arr.slice(1,3) // dosn't include the end point of range and also doesn't make any changes in the original array
console.log(newarr)
console.log( "A",arr)

const newarr2=arr.splice(1,3) // includes the end point of range and make deletes the elements from the main array in the given range 
console.log(newarr2)
console.log("B",arr)

