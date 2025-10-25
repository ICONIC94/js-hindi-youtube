// const obj2= new Object()
const obj2={}

obj2.id="123abcd"
obj2.name="Apurv"
obj2.isLoggedIn=false

// console.log(obj2)

const obj3={
    username:{
        name:"Apurv",
        place:{state:"UP",
            city:"Lucknow"
        }
    } 
}         // nested object can also be made 

// console.log(obj3.username.place.city)

const obj4={obj2,obj3}
// console.log(obj4);

obj5={...obj2,...obj3}
// console.log(obj5);
// console.log({...obj2,...obj3})

// console.log(Object.keys(obj2))
// console.log(Obje:ct.values(obj2))
// console.log(Object.entries(obj2)) // made list of every entry and compiled them whole in a list itself 
 

const {name:n}=obj2  // deobject 
console.log(n)