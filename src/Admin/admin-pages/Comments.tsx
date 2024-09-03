import { useEffect, useState } from 'react'
import * as adminFeedbackApi from '../admin-api/admin-feedbacks'
import AdminFeedback from '../admin-interface/AdminFeedbackType';
// import { Link } from 'react-router-dom'

const Comments = () => {
  const [allFeedbacks, setFeedbacks] = useState<AdminFeedback[] | null>(null);

  useEffect(() => {
    const fetchFeedbacks = async() => {
      const result = await adminFeedbackApi.getFeedbacks();
      result.sort((a:AdminFeedback, b:AdminFeedback) => a.id - b.id);
      setFeedbacks(result);
    }
    fetchFeedbacks();
  }, [])




  return (
    <div>
      <p>Comments</p>
    </div>
  )
}

export default Comments