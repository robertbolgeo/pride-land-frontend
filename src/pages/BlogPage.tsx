import { useEffect, useState } from "react";
import * as blogsApi from "../api/blogs";
import BlogsTypes from "../interfaces/BlogsType";
import BlogFocusList from "../components/blogComponents/blogFocusList";
import BlogHistoryList from "../components/blogComponents/blogHistoryList";

const BlogPage = () => {

    // useStates
    const [blogs, setBlogs] = useState<BlogsTypes[]>([]);

    // useEffects
    useEffect(() => {
        fetchAllBlogs();
    }, []);

    // Helper Functions
    const fetchAllBlogs = async () => {
        const response = await blogsApi.fetchAllBlogs();
        setBlogs(response)
    }

    return (
        <div className="w-screen">
            <div className="(Image) grid w-full h-[40rem] border-4 border-solid border-blue-500">
                <div className="m-auto w-60 h-40 text-center text-[100px] ">Blog</div>
            </div>
            <div className="(Body) h-full flex border-4 border-solid border-black">
                <div className="(Blog History) m-10 w-3/12 h-[60rem] border-4 border-solid border-red-500">
                    <BlogHistoryList blogsProp={blogs} />
                </div>
                <div className="(Selected Month's Blog Posts) m-10 w-4/5 border-4 border-solid border-red-800">
                    <h1 className="m-auto">Placeholder Month</h1>
                    <BlogFocusList blogsProp={blogs} />
                </div>
            </div>

        </div>
    )
}

export default BlogPage