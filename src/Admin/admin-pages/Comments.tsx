import { useEffect, useState } from 'react'
import * as adminFeedbackApi from '../admin-api/admin-feedbacks'
import {AdminFeedback} from '../admin-interface/AdminFeedbackType';
// import { Link } from 'react-router-dom'

const Comments = () => {
  const [allFeedbacks, setFeedbacks] = useState<AdminFeedback[] | null>(null);

  useEffect(() => {
    fetchFeedbacks();
  }, [])

  const fetchFeedbacks = async() => {
    const result = await adminFeedbackApi.getFeedbacks();
    result.sort((a:AdminFeedback, b:AdminFeedback) => a.id - b.id);
    setFeedbacks(result);
  }

  const handleStatus = async(feedback:AdminFeedback) => {
    let update = !feedback.is_accepted ? true : false;
    const data = {
      is_accepted: update
    };
    await adminFeedbackApi.updateFeedbacks(feedback.id, data);
    fetchFeedbacks();
  }

  const displayFeedbacks = allFeedbacks?.map((feedback) => 
    <div key={feedback.id}>
      <div>{feedback.name}</div>
      <div>{feedback.comment}</div>
      <div>{!feedback.is_accepted? "Not Displayed": "Displaying"}</div>
      <div>
        <input type='checkbox' name='checkbox' onClick={()=>handleStatus(feedback)} checked={feedback.is_accepted? true : false}></input>
      </div>
    </div>
  )

  return (
    <div id='feedbackStorage'>
      {displayFeedbacks}
    </div>
  )
}

export default Comments