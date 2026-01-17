//falsy  values(values that are considered false in conditions)
// false,0,-0,BigInt On,"",undefined,NaN


//truthy values 
//"0" , 'false' , " ",[]. {}.function(){}

// if you want to check whether a array is empty or not 
// use array.length == 0 

//if you want to check that object is empty or not 
 //use if(Object.keys(mynumber).length==0)


 //nullish coalescing operator (??) : used for nulll or undefind 

 let var1;
 var1= null ?? 10
 console.log(var1)

 // terniary operator
 //condition ? true:false

const price =500
price<500 ? console.log("true") : console.log("false")

