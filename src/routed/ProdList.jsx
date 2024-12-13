import React, { useEffect } from 'react'
import { useState } from 'react';
import { getAllProducts } from '../products/ProductApiService';
import { useNavigate } from 'react-router';

function ProdList(props) {
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            if (!productList.length || productList.length < 1) {
                var list = await getAllProducts();
                setProductList(list);
            }
        }
        loadProducts();
    })
    const selectItem = (id) => {
        navigate({ pathname: `/routed/${id}` })
    }
    return (
        <div className='card shadow mr-auto w-75'>
            <div className='card-header bg-warning d-flex '>
                <h4 className='text-center text-white flex-grow-1'>Product List</h4>
                <div>
                    <button className='btn btn-outline-dark text-end' type="button"
                        onClick={(e) => props.addNewItem()}>
                        Add New
                    </button>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-dark table-striped table-hover'>
                    <thead>
                        <tr><th>Product Name</th><th>Unit Price</th><th></th></tr>
                    </thead>
                    <tbody>
                        {
                            productList.length && productList.map((value, index) => (
                                <tr key={value.productId}>
                                    <td>{value.productName}</td>
                                    <td>{value.unitPrice}</td>
                                    <td>
                                        <button className='btn btn-sm btn-outline-success'
                                            onClick={(e) => selectItem(value.productId)}>
                                            Select
                                        </button>
                                        <button className='btn btn-sm btn-outline-danger'
                                            onClick={(e) => props.removeItem(value.productId)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProdList;