import { Link } from 'react-router-dom'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <p>This is Dashboard</p>
        <Link to="blogs-admin/"> link to blogs admin</Link>
    </div>
  )
}

export default Dashboard