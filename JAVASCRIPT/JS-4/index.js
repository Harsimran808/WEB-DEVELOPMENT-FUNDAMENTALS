// forEach,filter and map inbuilt functions in js 
// ==================================================================================================================================
//forEach in call backs: for each element of array it will callback the function 

let arr=[1,2,3,4,5]
function print(element){
    console.log(element)
}
// here print is a callback function to foreach function
arr.forEach(print)
// --------------------------------------

// with arrow function
let a=(ele)=>{
console.log(ele)
}
arr.forEach(a)
// ----------------------------------------

// print name using foreach and callback
let students=[
    {name:"Hemant",age:12},
    {name:"Shaka",age:123},
    {name:"Kaka",age:1243}
]
let b=(ele)=>{                         //arrow function that print name of arg passed to it 
    console.log(ele.name)
}
students.forEach(b)
// ----------------------------------------------------------
// print only even numbers
let arr1=[3,6,9,12,15,18]
let arro=(element)=>{
    if(element%2==0){
        console.log(element)
    }
}
arr1.forEach(arro)
// ---------------------------------------------------------------------------------------------------------------------------------------

// Filter method in callback: iterate over all elements and add elemnts to new array if returnd true for specific condition.

let arr2=[3,6,9,8,12,18]
let aro1=arr2.filter((ele)=>ele%2===0)   //as 1 line of code so arrow function will implicitly return the value
                                         // directly defining the arrow function inside the filter function
console.log(aro1)
// -----------------------------------
// students whose age is >18 with combination of filter and foreach
const users=[
    {name:"John",age:12},
    {name:"Cena",age:123},
    {name:"Rena",age:123}
]
let newv=users.filter((element)=>element.age>18)  //new array with students age>18 by using filter and arrow function in filter method directly
function print1(ele){                            //function to print arg passed to it
    console.log(ele.name)
}
newv.forEach(print1)                            //callbacking printing function inside foreach for the new array so only name can be printed

// ----------------------------------------------------------------
// printing numbers that are multiple of 5
const numb=[5,8,13,15,22,25]
let newa=numb.filter((ele)=>ele%5===0)
console.log(newa)

// ---------------------------------------------------------------------------------------------------------------------------------

// MAP
// transform the ele and put to new arr w/o affecting original array
// iterate over all ele perform specified operation and push the returned value to new arr
const num=[1,2,3,4,5,6]
let newarr=num.map((ele)=>ele*ele)   //new arr to put new ele
console.log(newarr)

let na=num.map((ele)=>ele+10)
console.log(na)


// ===================================================
// store name of student in new array
const stu=[
    {name:"John",marks:12},
    {name:"Cena",marks:19}
]
let newna=stu.map((ele)=>ele.name)
console.log(newna)

// updating marks by 5 and printing it with name
let newnb=stu.map((ele)=>{
    return {name:ele.name,marks:ele.marks+5}    //returning obj as name and updated marks
})
console.log(newnb)

// adding new property pass;true
let newc=stu.map((ele)=>{
    return{
        name:ele.name,mark:ele.marks,passes:true
    }
})
console.log(newc)