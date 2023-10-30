import React from 'react';

export default function NavBar() {

    return (
        <nav className='bg-blue-500 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <a href="#" className='text-white text-2xl font-semibold'>ReactSite</a>

                <ul className='flex space-x-4'>
                    <li><a href="#" className='text-white'>Home</a></li>
                    <li><a href="#" className='text-white'>About</a></li>
                    <li><a href="#" className='text-white'>Services</a></li>
                </ul>
            </div>
        </nav>
    )
}
