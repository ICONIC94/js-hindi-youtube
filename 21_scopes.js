 console.log(addkaro(5))
 function addkaro(num){
    return num+1
 }
  

// console.log(minuskaro(5))
// const minuskaro=function(num){       // Its called hoisting This won't work
//     return num-1
// }

// console.log(minuskaro(5))               // This will 
function minuskaro(num){
    return num-1
}


// Never use var to initialise any variable 
let a =34
let b =51
var c =98
  
if (true){     
    let a=23
    let b=35
    var c=33
    
}

console.log(c) // var can make changes in any scope but doesn't wprk if it is done inside a function