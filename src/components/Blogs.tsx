import { useEffect, useState } from "react";
import * as blogsApi from '../api/blogs';
import BlogsTypes from '../interfaces/BlogsType';

interface ImageType {
   src: string,
   alt: string
}

interface Props {
   images: ImageType []
}

const Blogs: React.FC<Props> = (props) => {
  const [blogs, setBlogs ] = useState<BlogsTypes[]>([]);

    useEffect(() => {
       fetchAllBlogs();
    },[]);

    const fetchAllBlogs = async() => {
      const response = await blogsApi.fetchAllBlogs();
        setBlogs(response)
    }

    const createBlogs = blogs.map((blog, index) => {
      return <div className="" id={'blogs-' + String(index+1)} key={blog.text + index}>
        <div className="">  
          <div className=" ">
                <div className="bg-white my-4 shadow-md p-2 rounded-lg">
                <img className="rounded-lg px-20 mt-5 " src={props.images[index].src}></img>
                <div className="my-2 text-center">{blog.name}</div>
                <div className="p-3">{blog.text}</div>
              </div>
              </div>
          </div>
        </div> 
   })

   return (
      
      <div className="bg-green-100 mt-36 p-32 mb-0 shadow-lg rounded-md mx-auto max-w-7xl px-6 lg:px-8 "> 
        <div id='all-blogs'>
          <div>
            {createBlogs}
          </div>
        </div>
      </div>
   )
}


export default Blogs