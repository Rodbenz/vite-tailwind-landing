import React from 'react'

export default function InfoOne() {
    return (

        <div className='bg-gradient-to-t from-gray-300'>
            <div className='container mx-auto flex  items-center py-16'>
                <div className='w-1/2'>
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="development" className='w-full rounded-2xl translate hover:translate-y-1 hover:scale-110' />
                </div>
                <div className='w-1/2 px-6'>
                    <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
                    <p className='text-sm font-medium'>Lorem ipsum sit amet consectetur adipisicing elit. Ad dolore est ea quaeret veniam quisquam, doloeum consequuntur aspernatur voluptatem tempore.</p>
                </div>
            </div>
        </div>
    )
}
