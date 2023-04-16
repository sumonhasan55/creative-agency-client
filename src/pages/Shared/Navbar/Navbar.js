import React from 'react';
import { Link } from 'react-router-dom';
import navlogo  from '../../../Assest/images/logos/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-amber-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link>Our Portfolio</Link></li>
                            <li><Link>Our Team</Link></li>
                            <li><Link>Contact Us</Link></li>


                        </ul>
                    </div>
                   <Link to="/home"><img src={navlogo} width={97} height={40} alt="logo-img"  /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='font-bold' to='/'>Home</Link></li>
                        <li><Link  className='font-bold' >Our Portfolio</Link></li>
                        <li><Link  className='font-bold' >Our Team</Link></li>
                        <li><Link  className='font-bold' >Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                   <Link to="/login"> <a className="btn">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;