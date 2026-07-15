// CALLBACKS
// We can store functions in variables as in jsfunctions act as values
// So we can pass function defination as an argument to another funciton is known as callback
// can be used in :- arrays methods, Timers, DOM, Asynchronus operations
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// passing function to greet and calling it inside 
function greet(fun){
    console.log("hi")
    console.log(fun)
    fun()
}
function print(){
    console.log("Hello")
}
// function calling pass the function without parenthesis then it will act as a variable
greet(print)
// if we console.log a function name w/o calling it (i.e not putting paranthesis with fun in console.log then that will acts as variable)
//  that then its definaintion gets printed
// --------------------------------------------------------------------------------------------------------------------------------------

function add(a,b){
    console.log(a+b)
}
function calling(func,x,y){
    func(x,y)
}
// calling 
calling(add,2,4)
// --------------------------------------------------------------------------------------------------------------------------------------

// passing 2 functions as an argument
function MAIN(callback1,callback2){
    console.log('A')
    callback1()
    console.log('B')
    callback2()
}
function x(){
    console.log("ABE saale")
}
function y(){
    console.log("Bulla")
}
MAIN(x,y)

// --------------------------------------------------------------------------------------------------------------------------------------

// Calling anonymous functions using callbacks
function callback1(f,x,y){
    console.log("SHAKTIMAAN ")
    f(x,y)
}
let a=function(a,b){
    console.log(a+b)
}
// 
// calling
callback1(a,2,4)
// --------------------------------------------------------------------------------------------------------------------------------------

// Arrow function
let reet=()=>{
    console.log("ABBA DABBA JABBA")
}
reet()

let arro=(shaka,kaka)=>{
    console.log(shaka+kaka)
}
arro(123,345)

// Explicit return in arrrow function
const ar=(q,y)=>{
    return q+y
}
let z=ar(19,89)
console.log(z)

// Implicit return type when def only conatin 1line of code without{}
// so we can remove return keyword ,as it implicitly return 
const GetName=()=>"Mera naam hai Bulla krta hoon Khulla "
console.log(GetName())

// output is undefined AS LAST rule with parantheses no implicitly return 
// means the output is undefined as arrow function is not returning anything
const ad=(a,b)=>{
    a+b
}
console.log(ad(10,40))

// returning multiple values as an object
let g=(n,a)=>{
    return {
        name:n,
        age:a
    }
}
console.log(g("BULLA","724"))

let re=(a,b)=>{
    return {
        sum:a+b,
        diff:a-b
    }
}
console.log(re(60,50))
// -------------------------------------------------------------------------------------------------------------------------------------

// callback in arrow function 
function call1(fun){
    console.log(fun())
}
// store arrowfunction in a variable
// let new_v =p=()=>{
//     console.log("ABEY SAALE")
// }
// call1(new_v)

// or directly make fun in calling
call1(p=()=>"ABEY SAALE")