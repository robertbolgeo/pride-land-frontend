import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../admin-authContext/AuthContext'
import UserType from '../admin-interface/AdminHeaderType'



 const AdminHeader: React.FC<UserType>  = (  ) => {

  let { user , logoutUser } = useContext(AuthContext)

  return (
      <div className='font-mono w-dvw  bg-gray-400 flex flex-row justify-between p-5'>
         <div  className='hover:cursor-pointer mx-5'> <Link to="/" >Main Page</Link> </div>
          {user ? (
               <div className='hover:cursor-pointer mx-5' onClick={logoutUser}>Logout</div>
          ): (
             <div className='hover:cursor-pointer'> <Link to="/login" >Login</Link> </div>
          )}         
      </div>
  )
}

export default AdminHeader
