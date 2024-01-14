import React from 'react'
import { useLocation } from 'react-router-dom';

import Signin from '../Partials/Pages/Authentication/Signin/Signin';
import Signup from '../Partials/Pages/Authentication/Signup/Signup';
import PasswordReset from '../Partials/Pages/Authentication/PasswordReset/PasswordReset';
import TwoStep from '../Partials/Pages/Authentication/TwoStep/TwoStep';
import Lockscreen from '../Partials/Pages/Authentication/Lockscreen/Lockscreen';
import Maintenance from '../Partials/Pages/Authentication/Maintenance/Maintenance';
import NoPageFound from '../Partials/Pages/Authentication/NoPageFound/NoPageFound';

import loginImg from '../assets/images/login-img.png';
import img from '../Common/CommonBrand/brand.png'

const AuthLayout = () => {

    const location = useLocation();
    const pathname = location.pathname;
 

    const authTitleMapping = {
        "/signin": "Signin",
        "/signup": "Signup",
        "/password-reset": "PasswordReset",
        "/two-step": "TwoStep",
        "/lockscreen": "Lockscreen",
        "/maintenance": "Maintenance",
        "/404": "NoPage",
    };
    const authTitle = authTitleMapping[pathname] || "";

    const authComponents = {
        Signin: <Signin />,
        Signup: <Signup />,
        PasswordReset: <PasswordReset />,
        TwoStep: <TwoStep />,
        Lockscreen: <Lockscreen />,
        Maintenance: <Maintenance />,
        NoPage: <NoPageFound />,
    };

  return (
        <body data-bvite="theme-Applegreen" className="layout-border svgstroke-a layout-default auth">
            <main className="container-fluid px-0">

                {/* <!-- start: project logo --> */}
                <div className="px-xl-5 px-4 auth-header" data-bs-theme="none">
                <a href="/index" className="brand-icon text-decoration-none d-flex align-items-center" title="BVITE Admin Template">
                   <img src={img} alt='logo' className='img-fluid ' width='30' ></img>
                    <span className="fw-bold ps-2 fs-5 text-dark">BE360</span>
                </a>
                </div>

                {/* <!-- start: page menu link --> */}
                <aside className="px-xl-5 px-4 auth-aside" data-bs-theme="none">
                <img className="login-img" src={loginImg} alt=""/>
                </aside>

                {/* <!-- start: page body area --> */}
                {authComponents[authTitle]}

                {/* <!-- start: page footer --> */}
                <footer className="px-xl-5 px-4">
                    <p className="mb-0 text-muted">© 2024 <a href="https://Pixelwibes.com/" target="_blank" title="pixelwibes">BE360</a>, All Rights Reserved.</p>
		        </footer>
                
            </main>
        </body>
    )
}

export default AuthLayout