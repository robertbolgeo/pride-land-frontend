const endpoint = process.env.backend_url + 'feedbacks/'

export const getFeedbacks = async() => {
    const request = await fetch(endpoint);
    const result = await request.json();
    return result;
}