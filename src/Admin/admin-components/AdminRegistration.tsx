import { useNavigate } from "react-router-dom"
import { useState, ReactNode } from "react";
import logo from '../../../src/assets/logo.png'
import Axios from 'axios';
import AdminRegistrationType from "../admin-interface/AdminRegistrationType";

interface ErrorType {
  error: ReactNode,
  setError: string,
}

interface Props {
 success: string,
}

const AdminRegistration: React.FC<Props> = () => {

    let navigate = useNavigate();
    const AUTH_REGISTER_URL = process.env.backend_auth_reg_url;

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState<ErrorType | null>(null);
    const [formData, setFormData] = useState<AdminRegistrationType>({
        username: "",
        password1: "",
        password2: "",
    })

    const handleRegisterChange = (e) => {
      setFormData({
        ...formData, [e.target.name]: e.target.value });
    }
   
    const handleSumbitForm = async (e) =>{
       e.preventDefault()
       if(isLoading){
          return
       }
       setIsLoading(true);
       try{
        const response = await Axios.post( AUTH_REGISTER_URL + "register/", formData)
        console.log("Registration Success!", response.data)
        setSuccess("登録完了しました!");
        navigate('/login');
       }
       catch (error){
        console.log('Error:', error.message)
        setError("エラー");
       }
       finally{
        setIsLoading(false)
       }
    }

    return (
      <>
      {/* Register and Logo */}
      <div className="flex min-h-full justify-center px-6 py-12 mt-[6rem] lg:px-8">
          <div className="shadow-2xl mt-0 mb-5 bg-gray-100 w-[22rem] h-[37rem]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
              alt="Pride-Land"
              src={logo}
              className="mx-auto my-0 h-40 "
            />

            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            アカウント登録
            </h2>
            {error && <p className="text-red-600 text-xs text-center">{error}</p>}
            {success && <p className="text-green-600 text-xs text-center">{success}</p>}
          </div>

          {/* Username */}
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#"  className="space-y-6 px-10">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                ユーザー名
                </label>
                <div>
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleRegisterChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"/>
                </div>
              </div>

              {/* Password1 */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    パスワード
                  </label>
                </div>
                <div>
                  <input
                    name="password1"
                    type="password"
                    value={formData.password1}
                    onChange={handleRegisterChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm 
                    ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"/>
                </div>
              </div>
              
              {/* Password2 */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    パスワード
                  </label>
                </div>
                <div >
                  <input
                    name="password2"
                    type="password"
                    value={formData.password2}
                    onChange={handleRegisterChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Register Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  onClick={handleSumbitForm}
                  className="mt-3 flex w-full justify-center rounded-md bg-gray-500 px-3 
                  py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-gray-400 
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-gray-600">
                 アカウント登録
                </button>
              </div>
                  </form>

              {/* Redirect button to Login */}
              <div className="text-center text-sm font-semibold text-gray-500 mt-4">
                <p
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/login", { replace: true })}
                    className="mt-3 text-center text-sm text-gray-500"
							    >
								<a href ="#" className="text-center" >ログイン</a>
							  </p>
              </div>
          </div>
          </div>
        </div>
    
      </>
    )
  }
  
  export default AdminRegistration