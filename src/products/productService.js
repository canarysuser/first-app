import Product from "./product";

const productList=[
    new Product(101, 'Markers', 100, 55, false),
    new Product(102, 'Pe', 200, 44, false),
    new Product(103, 'Pencils', 300, 333, false),
    new Product(104, 'Folders', 400, 222, false),
    new Product(105, 'Staplers', 500, 111, false)
]; 

export function getAllProducts() {
    return productList; 
}
export function getProductDetails(productId) {
    var list=productList.filter(c=>c.productId==productId); 
    if(list.length){
        return list[0];
    }
    return null;
}
//UPdate or inSERT 
export function upsert(model) { 
    var index = productList.findIndex(c=>c.productId==model.productId); 
    if(index>-1) {
        productList.splice(index, 1, model);
    } else {
        productList.unshift(model);
    }
}
export function remove(productId) { 
    var index = productList.findIndex(c=>c.productId==productId); 
    if(index>-1) {
        productList.splice(index, 1);
    }
}