const products=require("./price.js")
// console.log(products)
// [
//   { id: 1, title: 'Keyboard', price: 1800, category: 'electronics' },
//   { id: 2, title: 'T-Shirt', price: 799, category: 'clothing' },
//   { id: 3, title: 'USB Cable', price: 350, category: 'electronics' }
// ]
function getAllProducts(){
    return products
}
// find and filter iterating over each element of products array
function getProductById(prid){
    return products.find((prd)=>prd.id===prid)
}
function getProductByCategory(pcat){
    return products.filter((prd)=>prd.category===pcat)
}
function getProductCount(){
    return products.length
}
function getAfforadable(maxp){
    return products.filter((pd)=>pd.price<=maxp)
}
module.exports.all=getAllProducts
module.exports.id=getProductById
module.exports.cat=getProductByCategory
module.exports.l=getProductCount
module.exports.afford=getAfforadable