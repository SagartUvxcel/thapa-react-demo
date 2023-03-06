import React from 'react'
import "./style.css"
import { NavLink } from "react-router-dom"
// import imgLink from "../Website/photo-1599836653937-e55e04d69582.jpg"

const Menu = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <NavLink className="navbar-brand" to="/">ST Developer</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto navbar-list ">
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/">Home </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/AboutUs">About</NavLink>
                                    </li>
                                     <li className="nav-item">
                                        <NavLink className="nav-link" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/Blog/Sagar Tilekar">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/ContactUs">Contact US</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>




            {/* <div className=''>
                <div className="row navbar   ">
                    <div className="col-md-3 mx-5 ">
                    <h4 className='fw-bold logoText'>ST Developer</h4>
                    </div>
                    <div className="col-md-8 d-flex justify-content-end p-0">
                        <ul className='ul-list-navbar d-flex text-transform-none text-white pe-5'>
                            <li><NavLink   to="/">Home </NavLink></li>
                            <li><NavLink   to="/AboutUs">About Us </NavLink></li>
                            <li><NavLink  to="/Blog/Sagar Tilekar">Blog </NavLink></li>
                            <li><NavLink  to="/services">Services </NavLink></li>
                            <li><NavLink   to="/ContactUs">Contact Us </NavLink></li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Menu