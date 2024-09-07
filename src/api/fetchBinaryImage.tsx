const endpoint = process.env.media_url + 'get-img/'

export const fetchAllBinaryImage = async() => {
    try{
        const request = await fetch(endpoint);
        const result = await request.json();
        console.log(result)
        return result;
    } catch(error) {
        console.log("error", error)
    }
}