import React, { useState, useEffect } from 'react'
import { getProductDetails } from '../products/ProductApiService';
import { useNavigate, useParams } from 'react-router';

function ProdDetails(props) {
    //create a copy of the props and store it into the model state object
    const [model, setModel] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function loadProducts() {
            if (!model.productId) {
                var list = await getProductDetails(id);
                setModel({ ...list });
            }
        }
        loadProducts();
    }, []);


    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setModel({ ...model, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate({ pathname: '/routed' });
    }
    return (
        <div className='card shadow mr-auto w-75'>
            <div className='card-header bg-dark text-white h3'>Product Details</div>
            <div className='card-body'>
                <form id="form1" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className='form-group'>
                        <label htmlFor='productId'>Product Id</label>
                        <input type="text"
                            name='productId'
                            id='productId'
                            value={model.productId}
                            onChange={handleChange}
                            className='form-control' />

                    </div>
                    <div className='form-group'>
                        <label htmlFor='productName'>Product Name</label>
                        <input type="text"
                            name='productName'
                            id='productName'
                            value={model.productName}
                            onChange={handleChange}
                            className='form-control' />

                    </div>
                    <div className='form-group'>
                        <label htmlFor='unitPrice'>Product Name</label>
                        <input type="text"
                            name='unitPrice'
                            id='unitPrice'
                            value={model.unitPrice}
                            onChange={handleChange}
                            className='form-control' />

                    </div>
                    <div className='form-group'>
                        <label htmlFor='unitsInStock'>Product Name</label>
                        <input type="text"
                            name='unitsInStock'
                            id='unitsInStock'
                            value={model.unitsInStock}
                            onChange={handleChange}
                            className='form-control' />

                    </div>
                    <div className='form-group'>
                        <label htmlFor='discontinued'>Discontinued</label>
                        <input type="checkbox"
                            name='discontinued'
                            id='discontinued'
                            value={model.discontinued}
                            onChange={handleChange}
                            className='form-checkbox' />
                    </div>
                    <div>
                        <input type="submit" className='btn btn-info' value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProdDetails