import React from 'react'
import VolunteerForm from '../components/volunteerComponents/volunteerForm'

const VolunteerPage = () => {
  return (
    <div className="bg-gradient-to-br from-green-300 to-white font-sans">
        <div>
            <h1>Apply to be a pride farm Volunteer!</h1>
        </div>
        <div>
            <VolunteerForm/>
        </div>
    </div>
  )
}

export default VolunteerPage