import { useEffect, useState } from "react"
import Axios from "axios";
import * as blogsPostApi from "../admin-api/admin-blogs";
import BlogsTypes from "../../interfaces/BlogsType"
import * as blogsApi from "../../api/blogs"
import { format } from 'date-fns'
import { useNavigate } from "react-router-dom";
import AdminBlogsUpdate from "../admin-authContext/AdminBlogsUpdate";

const BlogsAdmin = () => {

const [blogs, setBlogs] = useState<BlogsTypes[]>([]);
const navigate = useNavigate();

  useEffect(()=>{
    fetchAllBlogs();
  },[]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const formData = new FormData(e.currentTarget);
      const response = await blogsPostApi.postBlogs(formData);
      console.log("Success!", response)
      navigate('/admin-layout/blogs-admin')
    } catch (error){
      console.log("error:" , error)
    }
  } 

  const fetchAllBlogs = async() => {
      const response = await blogsApi.fetchAllBlogs();
      setBlogs(response.reverse())
  }


  const handleDelete = (id: number) => {
    try{
    Axios.delete(process.env.backend_url  + `blogs/${id}/`)
    }catch (error){
      console.log()
    }
  }

  return (
    <>
    <AdminBlogsUpdate/>
    <div>
      <div>
        <form name="blogPost" method="POST" onSubmit={handleSubmit}>

          {/*  Blog Titles  choose events or blogs*/}
          <div> 
            <label >Title:</label>
            <div>
              <input 
                    type="text" 
                    id="name" 
                    name="name"
                    >
                    </input>
            </div>
          </div>


          {/* Blog Post */}
          <div>
            <label >Blog post:</label>
            <div>
              <textarea 
                        id="title" 
                        name="title"
                        >
              </textarea>
            </div>
          </div>

          {/* Upload Photo */}
          <div>
            <label ></label>
            <h2> Add image:</h2>
            <input type="file" 
                    id="images" 
                    accept="image/*"
                    name="images"
                    >
            </input>
          </div>

           {/* Post Button */}
           <div>
            <label ></label>
            <button type="submit" className="mt-2
             bg-red-400 rounded-lg p-1">Post</button>
          </div>
        </form>
      </div>
    </div>

   <div>
    <div>
      <h2 className="font-bold text-center">Blog List</h2>
      <ul className="flex justify-between font-semibold text-gray-500 px-2">
        <li>ID</li>
        <li>Date</li>
        <li>Title</li>
        <li>Update</li>
      </ul>
      <div>{blogs.map((elt, index) => (
          <div className="flex justify-between p-2  flex-row gap-5" id={"blogs-" + String(index+1)} key={elt.name + index} >
                <div>{elt.id}</div>
                <div className="text-center"><span>{format(elt.date_created, 'MM/dd/yyyy')}</span></div>
                <div className="text-center"><span>{elt.name}</span></div>
                <div className="flex gap-2
                ">
                <div><button onClick={() => <AdminBlogsUpdate/> }className="bg-orange-400 p-1 rounded-md text-xs">Edit</button> </div>
                <div><button onClick={() => handleDelete(elt.id)} className="bg-red-500 p-1 rounded-md text-xs">Delete</button> </div>
            </div>
          </div>
      ))}</div>
    </div>
   </div>
   </>
  )

}

export default BlogsAdmin