export default interface Blogs {
    id: BigInteger,
    name: string,
    title: string,
    images?: string,
    date_created: Date,
    text : string,
}

export interface BlogPageBlogs {
    id: BigInteger,
    name: string,
    text: string,
}

