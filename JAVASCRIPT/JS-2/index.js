// object
// key value pair and key as always string
let student = {
  name: "HARSIMRAN",
  age: 27,
  address: "Sarkari hospital",
};
console.log(student.name);
console.log(student["age"]);

// updating the value
student.age = 69;
console.log(`New age is ${student.age}`);

// to add new key value pair
student.rollno = 10;
console.log(
  `Newly added value in corresponds to newly created key rollno is ${student.rollno}`,
);

// for deleting the key from object
delete student.age;

// Nested object
let shaka = {
  naam: "KALLu",
  kaam: "sallu",
  // nested object
  kaka: {
    age: "saatso chalis",
    bache: "pachaas",
  },
};
console.log(shaka.naam, shaka.kaka.bache);
// --------------------------------------------------------------------------------------------------

// array of objects
let obj = [
  { nam: "rahul", age: 26 },
  { nam: "rahul dravid", age: 22 },
  { nam: "klrahul", age: 27 },
];
console.log(obj[0]);
console.log(obj[0].nam);
for (let i = 0; i < obj.length; i++) {
  if (obj[i].age > 25) {
    console.log(obj[i].nam);
  }
}
// to push ele in arr
obj.push({nam:"sharma",kam:"Achanhihaikarma"})
console.log(obj[3])
obj.pop()
// ---------------------------------------------------------------------------------------------------------------

// anonymous function a function without a name 
// printing each element of array without loop {forEach}
let scores=[10,9,8,7]
scores.forEach(function (element){
    console.log(element)
})

obj.forEach(function(element){
    console.log(element)
})


let numbers=[10,33,94,67,21,44,60,80,2]
let even=[]
numbers.forEach(function(element){
    if(element%2==0){
        even.push(element)
    }
})
console.log(even)
// OR
function isEven(number){
    return number%2==0
}
console.log(isEven(30))
// OR
// ------------------------------------------------------------------------------------------------------------------
// using filter method as its return type is array 
// if function return true then filter method add that element to the array
let number=[10,33,94,67,21,44,60,80,2]
function isEven(number){
    return number%2==0
}
let results=number.filter(isEven)
console.log(results)


// elements greater than 100
let points=[15,100,25,124,32543,124,235325,2124,2,23,234]
function isGreater(element){
    if(element>100){
        return true;
    }
    return false
}
let res=points.filter(isGreater)
console.log(res)

let products=[
    {n:"sa",p:"re"},
    {n:"ga",p:"ma"},
    {n:"pa",p:"re"},
]
function fil(element){
    return element.p=="re"
}
let reu=products.filter(fil)
console.log(reu)