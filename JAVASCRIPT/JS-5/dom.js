// DOM
// always connect js at the end of whole html code in body tag
// connecting different tags of html to js for interactiveness using DOM
// document is inbuilt function t store all the elements under that partiicular tag and have some predefined methods
// ----------------------------------------------------------------------------------------------

// a is a obj storing whole defination of tag whose id is ele1
let a=document.getElementById("ele1")
console.log(a)

// innertext is displaying only the text in whole defination stored in a 
console.log(a.innerText)

// modifying data for particular tag by replacing current text with new and it also modify it on the webpage
a.innerText="welcome to the jungle"
console.log(a.innerText)

let b=document.getElementById("ele2")
b.innerText="Good evening"
console.log(b.innerText)
// ---------------------------------------------------------------------------------------------------

// creating new element in html using js dynamically
// let var=document.createelement("TAG_NAME")
// add content in a 
// id_inWhichYouWantToAddNewele.appendChild("elemnt id under need to create new ele")

let n=document.getElementById("ele3")
// n have all the defination of ele3 id so push new content to n var ie in defination
let new_tag=document.createElement("h1")
new_tag.innerText="Adding content in newly created ele"
ele3.appendChild(new_tag)

// creating one more new element
let new_tag1=document.createElement("hr")
ele3.appendChild(new_tag1)
// ---------------------------------------------------------------------------------------------------------

// TASK for each ele in array create a p tag dynamically andpush to id ele3

// let n=document.getElementById("ele3")
let k=['a','b','c']
k.forEach((element) => {
    let new_tag2=document.createElement("p")
    new_tag2.innerText=element
    n.appendChild(new_tag2)
});
// ----------------------------------------------------------------------------

function fun_name(){
    alert(console.log("hello"))  //alert fun is used when button is clicked first it will show a alertx.

}
// ---------------------------------------------------------------------------------
function create(){
    let d=document.createElement("p")
    d.innerText="Hello HI Bye"
    d.id="ele10"                        //assigning id dynamically to newly created ele
    document.getElementById("container").appendChild(d)
}
function read(){
    let a=document.getElementById("ele10")
    console.log(a.innerText)
}
function del(){
    let x=document.getElementById("ele10")
    if(x){                              //if ele exist
         x.remove()
    }
    else{
        alert("tag not exist")
    }
}
function update(){
    document.getElementById("ele10").innerText="NAMASTE"
}