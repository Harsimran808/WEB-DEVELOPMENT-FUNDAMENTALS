// const product={
//     name:"laptop",
//     price:1000
// }
// // default export only one file can be exported
// // now importing the function from the file and storing the function def in a new variable
// const getPrice=require("./price")

// // now treating it as inbuilt function
// console.log(getPrice(product))

// ---------------------------------------------------------------------
// named export can export multiple files at a time as an object
// int that var all exported files that are created as an obj are stored 
// const product={
//     name:"laptop",
//     price:1000
// }
// const imported_file=require("./price")
// console.log(imported_file)
// // imported_file={
// //         name:getName,
// //         price:getPrice
// // }

// // now calling name imported fun from object
// console.log(imported_file.name(product))
// console.log(imported_file.price(product))
// ----------------------------------------------------------------

const imported_files=require("./service")
console.log(imported_files.all())
console.log(imported_files.id(2))
console.log(imported_files.cat("electronics"))
console.log(imported_files.l())