import BlogsType from "../interfaces/BlogsType";
const endpoint = process.env.backend_url + "blogs/"

export const fetchAllBlogs = async () => {
    const request = await fetch(endpoint);
    const result: BlogsType[] = await request.json();
    return result;
}

export const fetchAllBlogsById = async (id: number) => {
    const request = await fetch(endpoint + `${id}/`);
    const result: BlogsType[] = await request.json();
    return result;
}