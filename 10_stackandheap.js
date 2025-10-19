// there are two types of memory in js based on the datatype
// For primitive --> Stack memory 
// for Non - primitive  --> heap memory 

// The difference is that in Stack memory when we change the value of any primitive datatype it creates a copy of the 
// and no change is made in the main variable 

// While value assigned in a non primitve datatype gets stored in heap Such that when a chnage is made in the value 
// it chnages it from the main source 

//for example :

let name="RAJ"
let name1 = name
name="pushpa"
console.log(name)
console.log(name1)


let dict = {name:"Apurv",class:"enggg",age:21}
let dict2=dict
dict.name="Sahil"
console.log(dict.name)
console.log(dict2.name)
