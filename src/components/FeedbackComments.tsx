import { useEffect, useState } from 'react'
import * as feedbackApi from "../api/feedbacks"
import FeedbackType from '../interfaces/FeedbackType';

const FeedbackComments = () => {

    const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);

    useEffect(() => {
        fetchAllFeedbacks();
    }, [])

    const fetchAllFeedbacks = async() => {
        const result = await feedbackApi.fetchAllFeedbacks();
        setFeedbacks(result);
    }

    const createFeedbackDiv = feedbacks.map((feedback, index) => {

        return <div id={"feedback-" + String(index+1)} key={feedback.name + index}>
            <div>
                <h1>{feedback.comment}</h1>
            </div>
            <div>
                <p>{feedback.name}</p>
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