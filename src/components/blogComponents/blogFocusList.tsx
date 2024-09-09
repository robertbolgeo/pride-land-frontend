import { useEffect, useState } from "react";
import BlogsTypes from "../../interfaces/BlogsType"

interface BlogListProps {
    blogsProp: BlogsTypes[];
}

const BlogFocusList: React.FC<BlogListProps> = ({ blogsProp }) => {

    const createBlogs = blogsProp.map((blog, index) => {
        return (
            <div className="" id={'blogs-' + String(index + 1)} key={blog.text + index}>
                <div className="bg-white my-4 shadow-md p-2 rounded-lg">
                    {/* Images unsupported in DB as of writing this code, below is placeholder */}
                    {/* <img className="rounded-lg px-20 mt-5" src={}/> */}
                    <div className="my-2 text-center">{blog.name}</div>
                    <div className="p-3">{blog.text}</div>
                </div>
            </div>
        )
    })

    return createBlogs
}

export default BlogFocusList