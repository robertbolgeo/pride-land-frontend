const endpoint = process.env.backend_url + 'volunteers/'

export const postVolunteer = async (formData: any) => {
    try{
        const request = await fetch(endpoint, {
            method: "POST",
            body: formData
        });
        const result = await request.json();
        return result
    } catch(error) {
        console.log("error", error);
    }
}