import { Route, Navigate } from "react-router-dom"
import { ReactNode } from 'react'
import { useContext } from "react"
import AuthContext from "../admin-authContext/AuthContext"



const PrivateRoute = ({ children } : { children: ReactNode}, {...rest}) => {
  console.log('private route works')
  let  user = useContext(AuthContext)
    return (
      <Route {...rest}> {!user ? <Navigate to='/login'/> : children }</Route>
    
  )
}

export default  PrivateRoute;


