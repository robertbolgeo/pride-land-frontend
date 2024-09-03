export default interface Blogs {
    id: BigInteger,
    name: string,
    title: string,
    images?: string,
    date_created: Date,

}

export interface BlogPageBlogs {
    id: BigInteger,
    name: string,
    text: string,
}

