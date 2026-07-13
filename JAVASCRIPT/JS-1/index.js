// functions in JS
function addition(a,b){  
    console.log(a+b)
}
addition(10,20)
addition(100,200)
addition(1000,2000)
// ------------------------------------------------------------------------------------------------------------
function greetuser(name,message){
    console.log(message,name)
}
greetuser("Harman","shin shan shu")
// --------------------------------------------------------------------------------------------------------------

// known as template literals
function addition(a,b){  
    console.log(`Sum of ${a} and ${b} is ${a+b}`)
}
addition(10,20)
addition(100,200)
addition(1000,2000)
// ---------------------------------------------------------------------------------------------------------------

function printDetails(name,city,pincode){
    console.log(`Hello my name is ${name} and I am form ${city},my pincode is ${pincode}`)
}
printDetails("Lulla","Choop Nagar",696969)
// --------------------------------------------------------------------------------------------------------------------

function getSumOfTwoNumbers(a,b){
    return (a+b)
}
console.log(getSumOfTwoNumbers(1,2))
// -----------------------------------------------------------------------------------------------------------------

function printGrades(score){
    if (score>=90 && score<=100){
        console.log("grade A")
    }
    else if (score>=70 && score<=89){
        console.log("grade B")
    }
    else if (score>=40 && score<=69){
        console.log("grade C")
    }
    else if (score<40 && score>=0 ){
        console.log("grade F")
    }
    else{
        console.log("Invalid score")
    }
}
printGrades(69)
// ---------------------------------------------------------------------------------------------------------------