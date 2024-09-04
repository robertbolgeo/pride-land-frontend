import { useState } from "react"
import * as volunteerApi from "../../api/volunteers"
import Volunteer from "../../interfaces/VolunteersType";
import { format } from "date-fns";


const volunteerForm = () => {
    const [isSubmitted, setSubmitted] = useState<boolean>(false);
    const [volunteer, setVolunteer] = useState<Volunteer | null>(null);

    const handleIsSubmitted = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const formData = new FormData(event.currentTarget);
            const request = await volunteerApi.postVolunteer(formData);
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
                    <input type='datetime-local' id='start_date' name='start_date' required></input> <br/>
                <label htmlFor="bamboo">Bamboo: </label>
                    <input type="checkbox" name="bamboo"></input> <br/>
                <label htmlFor="vegetables">Vegatables: </label>
                    <input type="checkbox" name="vegetables"></input> <br/>
                <label htmlFor="eggs">Eggs: </label>
                    <input type="checkbox" name="eggs"></input> <br/>
                <label htmlFor="shiitake">Shiitake: </label>
                    <input type="checkbox" name="shiitake"></input> <br/>
                <label htmlFor="bees">Bees: </label>
                    <input type="checkbox" name="bees"></input> <br/>
                <label htmlFor="goats">Goats: </label>
                    <input type="checkbox" name="goats"></input> <br/>
                <label htmlFor="construction">Construction </label>
                    <input type="checkbox" name="construction"></input> <br/>
                <label htmlFor='restrictionsCheck'>Any restrictions we should know about?</label>
                    <input id='restrictionsCheck' name='restrictionsCheck' type='checkbox'></input> <br/>
                <label htmlFor='restrictions'>If so what?</label>
                    <input id='restrictions' name='restrictions' type='text'></input> <br/>
                <input name='is_accepted' defaultValue="false" hidden></input>
                <button type='submit'>submit</button>
            </form>
        ) : (
            <div>
            {volunteer &&
                <div>
                    <h1>Thank you for you interest, {volunteer.name}!</h1>
                    <h2>You will get an email at {volunteer.email}</h2>
                    <h2>Make sure you remember the date: {format(volunteer.start_date, "MM/dd/yyyy")} at {format(volunteer.start_date, "HH:m")}</h2>
                </div>
            }           
            </div>
        )}
    </div>
  )
}

export default volunteerForm