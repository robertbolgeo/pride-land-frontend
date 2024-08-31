import { useNavigate } from "react-router-dom"
import { useState } from "react";
import logo from '../../../src/assets/logo.png'
import Axios from 'axios';


const AdminRegistration: React.FC = () => {

    let navigate = useNavigate();
    const auth_register_url = process.env.backend_auth_reg_url

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
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
        const response = await Axios.post( auth_register_url + "register/", formData)
        console.log("Registration Success!", response.data)
        setSuccess("登録完了しました!");
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
  
          <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#"  className="space-y-6 px-10">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                ユーザー名
                </label>
                <div>
                  <input
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleRegisterChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
                
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

            <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  onClick={handleSumbitForm}
                  className="mt-3 flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                 アカウント登録
                </button>
              </div>
                  </form>

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