import Volunteer from "../interfaces/VolunteersType";

const endpoint = process.env.backend_url + 'volunteers/'

export const postVolunteer = async (form:Volunteer) => {
    try{
        const request = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(form),
        });
        const result = await request.json();
        return result
    } catch(error) {
        console.log("error", error);
    }
}