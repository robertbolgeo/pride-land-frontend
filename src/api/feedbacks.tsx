import FeedbackType from "../interfaces/FeedbackType";
const endpoint = process.env.backend_url + "feedbacks/"

export const fetchAllFeedbacks = async() => {
    try{
        const request = await fetch(endpoint);
        const result: FeedbackType[] = await request.json();
        return result;
    } catch(error) {
        console.log("error", error)
    }
}