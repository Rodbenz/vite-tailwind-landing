import React from 'react'

export default function Hero() {
  return (
    <div className='bg-gray-900 text-white py-16'>
        <div className='container mx-auto text-center'>
            <h1 className='text-5xl font-extrabold'>Welcome to Our Website</h1>
            <p className='text-lg mt-4'>Discover amzing things with TailwindCss.</p>
            <a href="#" className='bg-blue-500 text-white px-6 py-2 rounded-full mt-8 inline-block transition hover:bg-orange-300 hover:translate-y-1 hover:scale-110 duration-300' >Get Started</a>
        </div>
    </div>
  )
}
