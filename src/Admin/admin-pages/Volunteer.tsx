import { useEffect, useState } from 'react'
import * as volunteerApi from '../admin-api/admin-volunteers'
import {AdminVolunteer} from '../admin-interface/AdminVolunteerType';
import { format } from 'date-fns';

const Volunteer = () => {
  const [volunteers, setVolunteers] = useState<AdminVolunteer[] | null> (null);
  
  useEffect(() => {
    getAllVolunteers();
  }, [])

  const getAllVolunteers = async() => {
    const result = await volunteerApi.getAllVolunteers();
    result.sort((a:AdminVolunteer, b:AdminVolunteer) => b.id - a.id)
    setVolunteers(result);
  }

  const changeVolunteerStatus = async(volunteerData:AdminVolunteer) => {
    const data = {
      name: volunteerData.name,
      email: volunteerData.email,
      start_date: volunteerData.start_date,
      is_accepted: !volunteerData.is_accepted
    };
    await volunteerApi.updateVolunteerStatus(volunteerData.id, data);
    getAllVolunteers();
  }

  const displayVolunteers = volunteers?.map((volunteer) => 
    <div key={volunteer.id}>
      {volunteer.name} | {volunteer.email} | Date Submitted: {format(volunteer.signup_date, "MM/dd/yy")} | 
      Volunteer Date: {format(volunteer.start_date, "MM/dd/yy")}@{format(volunteer.start_date, "H:mm")} | {volunteer.restrictions} {volunteer.is_accepted? "accepted" : "not accepted"}
      <div>
        <button onClick={() => changeVolunteerStatus(volunteer)}>Accept/Reject</button>
      </div>
    </div>
    
  )


  return (
    <div id='volunteersContainer'>
      {displayVolunteers}
    </div>
  )
}

export default Volunteer