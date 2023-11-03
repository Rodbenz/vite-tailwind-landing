import React from 'react';
import { Link, Outlet, useNavigate  } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const handleRouteChange = (path) => {
      // Use the navigate function to programmatically navigate to a new route.
      navigate(path);
    };
    return (
        <nav className='bg-blue-500 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <a href="#" className='text-white text-2xl font-semibold'>ReactSite</a>

                <ul className='flex space-x-4'>
                    <li><a onClick={()=>handleRouteChange('/vitejs')} className='text-white'>Home</a></li>
                    <li><a onClick={()=>handleRouteChange('/vitejs/about')} className='text-white'>About</a></li>
                    <li><a href="#" className='text-white'>Services</a></li>
                    <li><a href="#" className='text-white'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
