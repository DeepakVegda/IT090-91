import React, { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import App from '../App';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6';

function Navbar() {
    const email = useParams();

    const [isMenuOpen ,setIsMenuOpen] =  useState(false);
    
    //Fuction
    const handleMenuToggler = ()=>{
        setIsMenuOpen(!isMenuOpen);  //toggle on-off
    }

    const navItems = [
        {path: `/${email['email']}`, title:"Start a search"},
        {path: `/my-job/${email['email']}`, title:"My Jobs"},
        {path: `/post-job/${email['email']}`, title:"Post A Job"},
        {path: `/contact/${email['email']}`, title:"Contact"},
    ]

    return (
        <header className={`max-w-screen-2xl container mx-auto xl:px-20 px-4`}>
            <nav className='flex justify-between items-center py-4'>
               <img src="/images/Mainlogo.png" alt="Logo"  width="220" height="180" /> 
               
               {/* nav items for large Devices */}
               <ul className='hidden md:flex gap-12 text-2xl'>
                {
                    navItems.map(({path,title}) =>(
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                isActive ? "active" : "" }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
               </ul>

               {/* sign-up and Login button */}
               <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    <Link to="/login" className='login-btn py-2 px-5 border rounded'>Log in</Link>
                    <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign up</Link>
               </div>

               {/* Mobile menu */}
               <div className='md:hidden block'>
                  <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <FaXmark className='mr-4 w-5 h-5 text-primary'/> : <FaBarsStaggered className='mr-4 w-5 h-5 text-primary'/>
                    }
                  </button>
               </div>
            </nav>

            {/* navitems for mobile */}
            <div className={`px-4 bg-white py-5 rounded-sm lg:hidden ${isMenuOpen ? '' : "hidden"}`}>
                <ul>
                 {
                    navItems.map(({path,title}) =>(
                        <li key={path} className='text-base text-primary first:text-primary py-1'>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                isActive ? "active" : "" }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                 }

                 {/* sign-up and` Login button  for mobile */}
                  <li className='text-primary py-1'> <Link to="/login">Log in</Link></li>

                </ul>
            </div>
        </header>
    )
}

export default Navbar;