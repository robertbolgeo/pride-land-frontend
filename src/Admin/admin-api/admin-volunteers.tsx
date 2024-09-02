import {MinPutVolunteer} from "../admin-interface/AdminVolunteerType";

const endpoint = process.env.backend_url + "volunteers/"

export const getAllVolunteers = async() => {
    const request = await fetch(endpoint);
    const result = await request.json();
    return result;
}

export const updateVolunteerStatus = async(id:number, data:MinPutVolunteer) => {
    const newEndpoint = endpoint + `${id}/`
    await fetch(newEndpoint, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
}