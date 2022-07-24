import React, { useState, useEffect} from 'react';
import {Outlet, Link } from "react-router-dom";
export default function Nav() {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="bg-white shadow dark:bg-black">
            <div className="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
                <div className="lg:flex lg:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">Brand</a>
                        </div>

                    
                        <div className="flex lg:hidden">
                            <button onClick={() => setToggleMenu(!toggleMenu)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>   
                        
                        <div className={`flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center ${toggleMenu ? '' : 'hidden'}`}>
                            <Link to="/" className="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">Home</Link> 
                        
                        </div>
                    
                </div>

            </div>
        </nav>
    
    )
}
