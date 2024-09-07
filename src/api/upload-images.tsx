const endpoint = process.env.media_url + 'upload-img/'

export const postImage= async (formData: FormData) => {
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

