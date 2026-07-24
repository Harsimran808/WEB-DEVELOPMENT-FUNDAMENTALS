// function getPrice(product){
//     return product.price
// }
// // exporting the function default export
// module.exports=getPrice
// -----------------------------------------------------------------

// function getPrice(product){
//     return product.price
// }
// function getName(product){
//     return product.name
// }
// // Named export for exporting multiple files
// // it wille be created as an obj like price:getPrice,name:getName
// // while importing need to store in variable with same name
// module.exports.price=getPrice
// module.exports.name=getName
// or
// while importing the var name must be same as the object entries
// module.exports={
//     getPrice,
//     getName
// }
// -----------------------------
// it is 1 value
const products = [
    { id: 1, title: "Keyboard", price: 1800, category: "electronics" },
    { id: 2, title: "T-Shirt", price: 799, category: "clothing" },
    { id: 3, title: "USB Cable", price: 350, category: "electronics" }
]
module.export=products
