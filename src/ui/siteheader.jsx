import React from 'react'
import Login from './login'
import { Link, NavLink } from 'react-router'

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
                            <NavLink className="nav-link active" to={"/"} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/products"}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/routed"}>Routed</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                <Link className="btn btn-outline-danger" to={'/login'} >Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Siteheader