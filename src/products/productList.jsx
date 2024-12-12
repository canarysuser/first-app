import React from 'react'

function ProductList(props) {
  return (
    <div className='card shadow mr-auto w-75'>
        <div className='card-header bg-warning'>
            <h4 className='text-center text-white p-1'>Product List</h4>
        </div>
        <div className='card-body'>
            <table className='table table-dark table-striped table-hover'>
                <thead>
                    <tr><th>Product Name</th><th>Unit Price</th><th></th></tr>
                </thead>
                <tbody>
                    {
                        props.productList.map((value, index)=>(
                            <tr key={value.productId}>
                                <td>{value.productName}</td>
                                <td>{value.unitPrice}</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-success'
                                            onClick={(e)=>props.selectItem(value.productId)}>
                                                Select
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

export default ProductList;