const endpoint = process.env.backend_url + "volunteers/"

export const getAllVolunteers = async() => {
    const request = await fetch(endpoint);
    const result = await request.json();
    return result;
}