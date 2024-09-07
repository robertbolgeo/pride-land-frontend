const endpoint = process.env.backend_url + "media/"

export const fetchAllBinaryImage = async() => {
    try{
        const request = await fetch('http://127.0.0.1:8000/media/get-img/');
        const result = await request.json();
        console.log(result)
        return result;
    } catch(error) {
        console.log("error", error)
    }
}