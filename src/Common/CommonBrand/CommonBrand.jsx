// import React from 'react'
// import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserDropdown from '../../Partials/Widgets/UserDropdown/UserDropdown';

import profileImage from '../../assets/images/profile_av.png';
import img from './brand.png'


const CommonBrand = () => {
    return (
    <>  
        <div className="px-4 pt-2 pb-2 brand" id='brand' data-bs-theme="none" >
            <div>
                <div className="d-flex align-items-center pt-1">
                    <button className="btn d-inline-flex d-xl-none border-0 p-0 pe-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_Navbar">
                        <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 6l16 0"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M4 18l16 0"></path>
                        </svg>
                        
                    </button>
                    {/* < />!--[ Start:: Brand Logo icon ]--> */}
                    <Link as='a' to="/" className="brand-icon text-decoration-none d-flex align-items-center" title="BE360">
                        <img src={img} className='img-fluid' width='30'></img>
                        <span className="fw-bold ps-2 fs-5 d-none d-xl-inline-flex fw-bolder" style={{color: 'white'}}>BE360</span>
                    </Link>
                </div>
                <ul className='nav nav-tabs border-0 d-none d-xl-inline-flex' role="tablist">
                    <li className="nav-item" role="presentation">
                        <div className="btn-group border rounded-pill" role="group" aria-label="Button group with nested dropdown">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn bg-transparent rounded-pill dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Select App</button>
                                <ul className="dropdown-menu p-2 p-xl-3 shadow rounded-4">
                                    <li><a className="dropdown-item rounded-pill active" href="#">BVite Sass App</a></li>
                                    <li><a className="dropdown-item rounded-pill" href="#">BGulp Web App</a></li>
                                </ul>
                            </div>
                            <button type="button" className="btn bg-transparent rounded-pill">
                                <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M9 12l6 0"></path>
                                    <path d="M12 9l0 6"></path>
                                </svg>
                            </button>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link as='a' className='nav-link' to="/app/my-profile">
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link as='a' className='nav-link' to="/app/blog">
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M8 21h8a5 5 0 0 0 5 -5v-3a3 3 0 0 0 -3 -3h-1v-2a5 5 0 0 0 -5 -5h-4a5 5 0 0 0 -5 5v8a5 5 0 0 0 5 5z"></path>
                                <path d="M7 7m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h3a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 -1.5 -1.5z"></path>
                                <path d="M7 14m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z"></path>
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link as='a' className='nav-link' to="#">
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                            </svg>
                        </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link as='a' className='nav-link' to="/docs/changelog">
                            <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10.09 4.01l.496 -.495a2 2 0 0 1 2.828 0l7.071 7.07a2 2 0 0 1 0 2.83l-7.07 7.07a2 2 0 0 1 -2.83 0l-7.07 -7.07a2 2 0 0 1 0 -2.83l3.535 -3.535h-3.988"></path>
                                <path d="M7.05 11.038v-3.988"></path>
                            </svg>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="d-none layout-a-action">
                <div className="mb-2">
                    <a className="d-flex align-items-center lh-sm p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="User">
                        <img className="avatar rounded-circle border border-3 shadow" src={profileImage} alt="avatar"/>
                    </a>
                    <UserDropdown/>
                </div>
                <Link as='a' to="/signin" className="btn p-1" title="Sign out">
                    <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 6a7.75 7.75 0 1 0 10 0"></path>
                        <path d="M12 4l0 8"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </>
  )
}

export default CommonBrand