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
    <div className='relative mt-11 h-[21rem] bg-gray-200 border-black border border-solid rounded-lg p-5' key={feedback.id}>
      <h1 className='font-medium'>Name:</h1>
      <div className='mt-3 mb-5 font-bold text-3xl'>{feedback.name}</div>
      <h1 className='mb-5 font-medium'>Comment:</h1>
      <div className='p-3 max-h-28 overflow-auto rounded-xl bg-gray-50'>
        <h1 className='inline'>{feedback.comment}</h1>
      </div>
      <div className='flex absolute bottom-0 my-5'>
        <div className='font-medium w-28 mr-5'>{!feedback.is_accepted? "Not Displayed": "Displaying"}</div>
        <div>
          <input type='checkbox' name='checkbox' onChange={()=>handleStatus(feedback)} checked={feedback.is_accepted? true : false}></input>
        </div>
      </div>
    </div>
  )

  return (
    <div className='grid grid-cols-3 gap-x-10' id='feedbackStorage'>
      {displayFeedbacks}
    </div>
  )
}

export default Comments