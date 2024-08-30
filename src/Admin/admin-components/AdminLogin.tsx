import { useContext } from "react"
import AuthContext from "../admin-authContext/AuthContext"
import { useNavigate } from "react-router-dom";

const AdminLogin: React.FC = () => {

  let navigate = useNavigate();
  let { loginUser } = useContext(AuthContext);
 
    return (
      <>
      <div className="flex min-h-full justify-center px-6 py-12 mt-[12rem] lg:px-8">
          <div className="shadow-2xl p-10 rounded-md bg-gray-100 w-[20rem] h-[28rem]">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img 
              className="mx-auto h-10 w-auto"
              alt="Your Company"
              src=""
            /> */}
            <h2 className="mt-5 text-center text-2xl font-bold text-gray-900">
            ログイン
            </h2>
          </div>
              
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={loginUser} className="space-y-6">

                {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-900">
                ユーザー名
                </label>
                <div className="mt-2">
                  <input
                    type="text" 
                    name="username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

                {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    パスワード
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="password" 
                    name="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

                {/* Button */}
              <div>
                <button
                  type="submit"
                  className="mt-10 flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                 ログイン
                </button>
              </div>
              </form>

             
              <div className="text-center text-sm font-semibold text-gray-500 mt-4">
                <p
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/register", { replace: true })}
                    className="mt-3 text-center text-sm text-gray-500"
							    >
								<a href ="#" className="text-center" >新しいアカウンを作成</a>
							</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default AdminLogin