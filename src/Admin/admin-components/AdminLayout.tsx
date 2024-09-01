import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../admin-pages/SideBar'
import Header from '../admin-pages/Header'

const AdminLayout = () => {
  return (
    <div className='flex flex-row bg-gray-200 h-screen w-screen overflow-hidden'>
        <SideBar />
        <div className='flex-1'>
        <div><Header /></div>
        <div className='p-4'>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default AdminLayout