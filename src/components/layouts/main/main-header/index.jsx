import React from 'react'

const MainHeader = () => {
    return (
        <div className='w-full p-3 bg-transparent rounded-b-lg flex justify-start items-center'>
            <div className='w-full flex gap-4 justify-end items-center'>
                <p className='text-lg text-center font-bold text-primary-200'>
                    Admin
                </p>
                <div className='w-12 h-12 rounded-xl bg-slate-600 cursor-pointer'>
                </div>
            </div>
        </div>
    )
}

export default MainHeader