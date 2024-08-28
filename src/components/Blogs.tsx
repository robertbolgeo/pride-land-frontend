import { useEffect, useState } from "react";
import * as blogsApi from '../api/blogs'
import BlogsTypes from '../interfaces/BlogsType' 

const  Blogs = () => {

      const [blogs, setBlogs ] = useState<BlogsTypes[]>([]);

      useEffect(() => {
         fetchAllBlogs();
      },[]);

      const fetchAllBlogs = async() => {
         const response = await blogsApi.fetchAllBlogs();
         setBlogs(response)
      }

      const createBlogs = blogs.map((blog, index) => {
      return <div id={'blogs-' + String(index+1)} key={blog.text + index}>
               <div>
                  <div className="bg-white my-4 p-2 rounded-md">
                     <div className="mb-3 text-center">{blog.name}</div>
                     <div className="p-3">{blog.text}</div>
                  </div>
               </div>
            </div> 
   })

   return (
      <div className="bg-green-100 mx-5 mt-36 p-5 mb-0 rounded-md"> 
      <div id='all-blogs'>
         <div>
         {createBlogs}
         </div>
      </div>
      </div>
   )
}


export default Blogs