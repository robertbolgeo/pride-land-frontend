import { useEffect, useState } from 'react'
import * as feedbackApi from "../../api/feedbacks"
import FeedbackType from '../../interfaces/FeedbackType';


interface ImageType {
    src: string,
    alt: string
}
interface Props {
    images: ImageType []
}

const FeedbackComments: React.FC<Props> = (props) => {

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
        return <div id={"feedback-" + String(index+1)} key={feedback.name + index} className='m-4 flex flex-col justify-center'>
                <div className="bg-white p-6 flex flex-col text-center text-md rounded-md drop-shadow-lg my-3">
                    <div>
                        <img src={props.images[index].src}></img>
                    </div>
                    <div className=''>
                        <h1>{feedback.comment}</h1>
                    </div>
                    <div className=''>
                        <p>{feedback.name}</p>
                    </div>
                </div>
            </div>

    })

  return (
    <div id='all-feedbacks' className='mx-auto max-w-full flex gap-10'>
        {createFeedbackDiv}
    </div>
  )
}

export default FeedbackComments