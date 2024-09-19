// data-types
// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// let score = 100;
// let scoreValue = 100.3;
// let isLOggedIn = false;
// let outsideTemp = null;
// let userEmail = undefined;
// let id = Symbol('123');
// let anotherId = Symbol('12345');
// console.log(id === anotherId);

let bigNumber = 7983499388n;
console.log(typeof bigNumber);

// Reference (Non-Primitive)
// Array, Objects, Functions
// let webSeries = ["Mirzapur", "Ashram", "Raktanchal"]
// console.log(webSeries);

// let peronObj = {
    // name: "Chiranjeev",
    // age: 22
// }
// console.log(peronObj);

let myFunction = function() {
    console.log("Namaste Javascript");
}

myFunction();
console.log(typeof myFunction);


//Stack (primitive)   And Heap (Non primitive)

let myYoutubename="MithleshStudyCentre"
let anothername=myYoutubename
anothername="study centre"
console.log(myYoutubename);
console.log(anothername);


let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userone
userTwo.email="mithleshbxr95@gmail.com"
console.log(userone.email);
console.log(userTwo.email);

