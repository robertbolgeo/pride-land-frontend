const endpoint = process.env.backend_url + 'blogs/'

export const postBlogs = async (formData: FormData) => {
    try {
        const request = await fetch(endpoint, {
            method: 'POST',
            body: formData
        });
        const result = await request.json();
        console.log(result)
        return result
    } catch(error){
        console.log("error", error)
    }
}