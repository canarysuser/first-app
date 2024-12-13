//import axios from 'axios';

const URL = "http://localhost:5000/products";
// const axiosInstance = axios.create({
//     baseURL:'http://localhost:5000',
//     timeout: 1000, 
//     headers: {'Content-Type':'application/json'},
//     maxBodyLength: 1000,
//     maxContentLength:65536
// })
export async function getAllProducts() {
    //var response = await axiosInstance.get('products');
    // var response = await axios({method: 'GET', url:URL});
    // return response.data;
}

export async function getProductDetails(productId) {
    let pURL = `${URL}?productId=${productId}`
    var response = await fetch(pURL);
    var result = await response.json();
    return result[0];
}
//UPdate or inSERT 
export async function upsert(model) {
    let method = 'POST'; //for INSERT operation
    let pURL = `${URL}`;
    let token = window.sessionStorage.getItem('token');
    if(!token) { //throw error.
    }
    let headers = {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    };
    var item = await getProductDetails(model.productId);
    if (item) {
        method = "PUT"; //For the UPDATE operation
        pURL = `${URL}/${model.id}`
    }
    var body = JSON.stringify(model);
    try {
        var response = await fetch(pURL, {
            method: method,
            body: body,
            headers: headers
        });
        var result = await response.json();
        return result;
        // return;
    } catch (e) {
        console.log(e);
    }
}
export async function remove(productId) {
    var item = await getProductDetails(productId);
    if (item) {
        let pURL = `${URL}/${item.id}`
        var response = await fetch(pURL, {
            method: 'DELETE'
        });
        var result = await response.json();
        return result;
    }
}