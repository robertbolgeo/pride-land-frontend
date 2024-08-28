import { useEffect, useState } from 'react'
import * as feedbackApi from "../api/feedbacks"
import FeedbackType from '../interfaces/FeedbackType';

const FeedbackComments = () => {

    const [feedbacks, setFeedbacks] = useState<FeedbackType []>([]);

    useEffect(() => {
        fetchAllFeedbacks();
    }, [])

    const fetchAllFeedbacks = async() => {
        const result = await feedbackApi.fetchAllFeedbacks();
        if(!result) return;
        setFeedbacks(result);
    }

    const createFeedbackDiv = feedbacks.map((feedback, index) => {
        return <div id={"feedback-" + String(index+1)} key={feedback.name + index}>

            <div className="bg-white p-6 flex flex-col-1 justify-between text-center text-md rounded-md drop-shadow-lg">
            <div>
                <h1>{feedback.comment}</h1>
            </div>
            <div>
                <p>{feedback.name}</p>
            </div>
        </div>
        </div>

    })

  return (
    <div id='all-feedbacks'>
        {createFeedbackDiv}
    </div>
  )
}

export default FeedbackComments