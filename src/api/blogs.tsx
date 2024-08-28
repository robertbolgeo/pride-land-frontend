import BlogsType from "../interfaces/BlogsType";
const endpoint = process.env.backend_url + "blogs/"

export const fetchAllBlogs = async () => {
    const request = await fetch(endpoint);
    const result: BlogsType[] = await request.json();
    return result;
}