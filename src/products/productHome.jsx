import React, { useEffect, useState } from 'react'
import Product from './product';
//import * as service from './productService';
import * as service from './ProductApiService';
import ProductList from './productList';
import ProductDetails from './productDetails';

function ProductHome() {
    const [productList, setProductList] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(new Product(0, '', 0, 0, false));


    useEffect(() => {
        async function loadProducts() {
            if (!productList.length || productList.length < 1) {
                var list = await service.getAllProducts();
                setProductList(list);
            }
        }
        loadProducts();
        //console.log("useEffect called.")
    }, [selectedProduct])

    var onSelectItem = async (id) => {
        // alert('Selected Product Id: ' + id);
        var item = await service.getProductDetails(id);
        setSelectedProduct(item);
    }
    var onModelChanged = async (model) => {
        await service.upsert(model);
        var list = await service.getAllProducts();
        setProductList([...list]);
    }
    var onRemoveItem = async (id) => {
        await service.remove(id);
        var list = await service.getAllProducts();
        setProductList([...list]);
    }
    var onAddNewItem = () => {
        let obj = new Product(0, '', 0, 0, false);
        setSelectedProduct(obj)
    }
    return (
        <div className='mx-5'>
            <h3 className='bg-primary text-center p-3'>Product Management</h3>
            <div className='row'>
                <div className='col-6'>
                    {
                        productList.length ?
                            <p>Total records: {productList.length}</p> :
                            <p>No records to show</p>
                    }
                    <ProductList productList={productList}
                        selectItem={onSelectItem}
                        removeItem={onRemoveItem}
                        addNewItem={onAddNewItem} />
                </div>
                <div className='col-6'>

                    {/* Selected Product: 
                    <br/>
                    {JSON.stringify(selectedProduct)}
                    <br/> */}
                    <ProductDetails model={selectedProduct} onSubmit={onModelChanged} />
                </div>
            </div>
        </div>
    )

}

export default ProductHome

