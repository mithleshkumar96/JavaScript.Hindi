// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);

// console.log("2"<1);
// console.log("2">1);
// console.log(1<"2");

// console.log(null >0);
// console.log(null ==0);
// console.log(null >=0);

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

// let value = 3;
// let negValue = -value;
// console.log(negValue);

const myName = "text";
var obj1 = {
  name: "sas",
  age: 12,
  myName: "bala",
};

var obj2 = {
  name: "new name",
  age: 12,
  [myName]: "bala2",
};
const finalObe = { ...obj1, ...obj2 };

console.log(finalObe); //false

const arr1 = []; //32313
const arr2 = []; //23232
  console.log(arr1 == arr2); //false  //
  console.log(arr1 === arr2); //fasle
  console.log(obj1 === obj2); //false
const a = 10;
var b = "10";
  console.log(a == b); // true
  console.log(a === b); // false
