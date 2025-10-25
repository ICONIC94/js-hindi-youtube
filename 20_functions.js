function primenumbers(num1,num2,...num3){
    return num3
}

const array=[23,12,34,54,64,65]
// console.log(primenumbers(array)) // returns the whole array if return num3 then prints empty list
// console.log(primenumbers(34,64,23,54,64,23,60)) 


function userdetails(obj){
    return `Name of the user is ${obj.name} and his age is ${obj.Age}`
}

user1={
    name:"Apurv",
    price:4000,
    Address:"Lucknow",
    class:"engg",
    Age:21
}
console.log(userdetails(user1))
console.log(userdetails({name:"Sahil",price:4000,Age:21}))