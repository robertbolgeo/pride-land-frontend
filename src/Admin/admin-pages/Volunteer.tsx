import React, { useEffect, useState } from 'react'
import * as volunteerApi from '../admin-api/admin-volunteers'
import AdminVolunteer from '../admin-interface/AdminVolunteerType';

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState<AdminVolunteer[] | null> (null);


  useEffect(() => {
    const getAllVolunteers = async() => {
      const result = await volunteerApi.getAllVolunteers();
      setVolunteers(result);
    }
    getAllVolunteers();
  }, [])

  const displayVolunteers = volunteers?.map((volunteer, index) => 
    <div key={index}>
      {volunteer.name} | {volunteer.email} | {volunteer.signup_date} | 
      {volunteer.start_date} | {volunteer.restrictions} {volunteer.is_accepted? "accepted" : "not accepted"}
    </div>
  )


  return (
    <div id='volunteersContainer'>
      {displayVolunteers}
    </div>
  )
}

export default Volunteer