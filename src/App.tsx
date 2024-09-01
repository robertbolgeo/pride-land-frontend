import "./App.css";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Layout from "./components/homeComponents/Layout";
import Home from "./pages/Home";
import AdminLogin from "./Admin/admin-components/AdminLogin";
import AdminPage from "./Admin/admin-components/AdminPage";
import { AuthProvider } from "./Admin/admin-authContext/AuthContext";
import AdminRegistration from "./Admin/admin-components/AdminRegistration";import VolunteerPage from "./pages/VolunteerPage";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>   
                </Route>     

                <Route path="login" element={<AdminLogin/>}/>
                <Route path="register" element={<AdminRegistration/>} />
                <Route path="admin-layout" element={<AdminPage/>}/>
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
};

export default App;