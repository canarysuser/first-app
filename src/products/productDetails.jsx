import React, { useState, useEffect } from 'react'

function ProductDetails(props) {
    //create a copy of the props and store it into the model state object
    const [model, setModel] = useState({ ...props.model });
    const [formErrors, setFormErrors] = useState({
        productId: '',
        productName: '',
        unitPrice: '',
        unitsInStock: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', model);
        props.onSubmit(model);
    }
    const handleChange = (e) => {
        
        let name = e.target.name;
        let value = e.target.value;
        
        if (name == 'productId') {
            let parsedValue = parseInt(value);
            console.log(parsedValue);
            if (parsedValue == model.productId) {
               // console.log('Error in productId');
                setFormErrors({
                    ...formErrors,
                    productId:'Product Id should be numbers'
                });
            } else {
                setFormErrors({
                    ...formErrors,
                    productId:''
                });
            }
        } 
        if(name=='productName' && (value.length < 3 || value.length > 50)) {
            setFormErrors({...formErrors, productName:'Name should be 3 to 50 chars long.'}); 
        } else {
            setFormErrors({...formErrors, productName:''}); 
        }
        console.log(name + '=>' + value);
        setModel({...model, [name]: value});
    }
    useEffect(() => {
        if (model.productId != props.model.productId) {
            setModel({ ...props.model });
        }
    }, [props]);

    return (
        <div className='card shadow mr-auto w-75'>
            <div className='card-header bg-dark text-white h3'>Product Details</div>
            <div className='card-body'>
        <form id="form1" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='productId'>Product Id</label>
                <input type="text"
                    name='productId'
                    id='productId'
                    value={model.productId}
                    onChange={handleChange}
                    className='form-control' />
                { formErrors.productId && <span className='text-danger'>{formErrors.productId}</span>}
            </div>
            <div className='form-group'>
                <label htmlFor='productName'>Product Name</label>
                <input type="text"
                    name='productName'
                    id='productName'
                    value={model.productName}
                    onChange={handleChange}
                    className='form-control' />
                { formErrors.productName && <span className='text-danger'>{formErrors.productName}</span>}
            </div>
            <div className='form-group'>
                <label htmlFor='unitPrice'>Product Name</label>
                <input type="text"
                    name='unitPrice'
                    id='unitPrice'
                    value={model.unitPrice}
                    onChange={handleChange}
                    className='form-control' />
                { formErrors.unitPrice && <span className='text-danger'>{formErrors.unitPrice}</span>}
            </div>
            <div className='form-group'>
                <label htmlFor='unitsInStock'>Product Name</label>
                <input type="text"
                    name='unitsInStock'
                    id='unitsInStock'
                    value={model.unitsInStock}
                    onChange={handleChange}
                    className='form-control' />
                { formErrors.unitsInStock && <span className='text-danger'>{formErrors.unitsInStock}</span>}
            </div>
            <div className='form-group'>
                <label htmlFor='discontinued'>Discontinued</label>
                <input type="checkbox"
                    name='discontinued'
                    id='discontinued'
                    value={model.discontinued}
                    onChange={handleChange}
                    className='form-checkbox' />
                { formErrors.discontinued && <span className='text-danger'>{formErrors.unitsInStock}</span>}
            </div>
            <div>
                <input type="submit" className='btn btn-info' value="Submit" />
            </div>
        </form>
        </div>
        </div>
    )
}

export default ProductDetails