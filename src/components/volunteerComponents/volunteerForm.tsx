import { useState } from "react"
import * as volunteerApi from "../../api/volunteers"
import Volunteer from "../../interfaces/VolunteersType";


const volunteerForm = () => {
    const [isSubmitted, setSubmitted] = useState<boolean>(false);
    const [volunteer, setVolunteer] = useState<Volunteer | null>(null);

    const handleIsSubmitted = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const formData = new FormData(event.currentTarget);
            const request= await volunteerApi.postVolunteer(formData);
            setVolunteer(request);
            setSubmitted(true);
        } catch(error) {
            console.log("error submitting form", error)
        }
    }

  return (
    <div>
        {!isSubmitted ? (
            <form name="myForm" method='POST' onSubmit={handleIsSubmitted}>
                <label htmlFor='name'>Name: </label>
                    <input type='text' id='name' name='name' required></input> <br/>
                <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' name='email' required></input> <br/>
                <label htmlFor='start_date'>Start Date: </label>
                    <input type='date' id='start_date' name='start_date' required></input> <br/>
                <label htmlFor='category'>Category: </label>
                    <select id='category' name='category' required>
                        <option defaultValue="">Please choose a category</option>
                        <option value="1">Weeds</option>
                        <option value="2">Shittake Mushrooms</option>
                        <option value="3">Eggs</option>
                        <option value="4">Bee Keeping</option>
                        <option value="5">Bamboo</option>
                    </select> <br/>
                <label htmlFor='restrictionsCheck'>Any restrictions we should know about?</label>
                    <input id='restrictionsCheck' name='restrictionsCheck' type='checkbox'></input> <br/>
                <label htmlFor='restrictions'>If so what?</label>
                    <input id='restrictions' name='restrictions' type='text'></input> <br/>
                <input name='status' defaultValue='1' hidden></input>
                <button type='submit'>submit</button>
            </form>
        ) : (
            <div>
            {volunteer &&
                <div>
                    <h1>Thank you for you interest, {volunteer.name}!</h1>
                    <h2>You will get an email at {volunteer.email}</h2>
                    <h2>Make sure you remember the date: {volunteer.start_date.toString()}</h2>
                </div>
            }           
            </div>
        )}
    </div>
  )
}

export default volunteerForm