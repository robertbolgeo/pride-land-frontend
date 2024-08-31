import { Outlet } from "react-router-dom"
import AdminHeader from "./AdminHeader"
import AdminSideBar from "./AdminSideBar"

const AdminPage: React.FC = () => {
  return (
    <>
    <AdminHeader/>
    <AdminSideBar />
    <Outlet/>
    </>
  )
}

export default AdminPage