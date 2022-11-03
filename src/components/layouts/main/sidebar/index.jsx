import React from 'react'
import DashboardSVG from 'assets/icons/dashboard-icon.svg'
import LogoPNG from 'assets/images/brand-logo.png'
import Image from 'next/image'

const Sidebar = () => {
    return (
        <div className='w-56 flex flex-col justify-start items-center bg-white py-4 px-1 rounded-lg'>
            <div className='p-2 h-1/6'>
                <Image src={LogoPNG} alt='Logo' width={120} height={40} />
            </div>
            <div className='w-full h-5/6 flex flex-col gap-2'>
                <p className='flex justify-start items-center gap-2 font-semibold text-md text-primary-200 cursor-pointer hover:bg-slate-200 p-2 border-l-primary-200 border-l-2'>
                    {/* <Image src={DashboardSVG} alt='Dashboard' width={20} height={20} /> */}
                    Dashboard
                </p>
                <p className='flex justify-start items-center gap-2 font-thin text-md text-gray-500 hover:text-primary-200 cursor-pointer hover:bg-slate-200 p-2 hover:border-primary-200 hover:border-l-2'>
                    {/* <Image src={DashboardSVG} alt='Dashboard' width={20} height={20} /> */}
                    Menu 2
                </p>
                <p className='flex justify-start items-center gap-2 font-thin text-md text-gray-500 hover:text-primary-200 cursor-pointer hover:bg-slate-200 p-2 hover:border-primary-200 hover:border-l-2'>
                    {/* <Image src={DashboardSVG} alt='Dashboard' width={20} height={20} /> */}
                    Menu 3
                </p>
            </div>
            <div className='w-full h-1/6 flex flex-col justify-end'>
                <p className='flex justify-start items-center gap-2 font-thin text-md text-gray-500 hover:text-primary-200 cursor-pointer hover:bg-slate-200 p-2 hover:border-primary-200 hover:border-l-2'>
                    {/* <Image src={DashboardSVG} alt='Dashboard' width={20} height={20} /> */}
                    Logout
                </p>
            </div>
        </div>
    )
}

export default Sidebar