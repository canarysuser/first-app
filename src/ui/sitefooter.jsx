import React from 'react'
import { NavLink } from 'react-router'

function Sitefooter() {
    return (
        <nav className="navbar opacity-75 fixed-bottom bg-body-tertiary bg-dark ">
            <div className="container-fluid text-white">
            <NavLink className="nav-link" to={"/"} >Home</NavLink>
                &copy; &trade; All Rights reserved. 
            </div>
        </nav>
    )
}

export default Sitefooter