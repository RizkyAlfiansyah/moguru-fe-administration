import React from 'react'
import MainHeader from '../main-header'

const MainLayout = ({ children }) => {
    return (
        <div className='w-full h-screen bg-transparent p-2 rounded-lg flex flex-col gap-4'>
            <MainHeader />
            <div className='w-full'>
                {children}
            </div>
        </div>
    )
}

export default MainLayout