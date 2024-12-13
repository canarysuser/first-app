import React from 'react'

function Siteheader() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top opacity-100 bg-dark bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Northwind Traders</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Siteheader