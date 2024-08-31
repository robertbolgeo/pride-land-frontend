import React from 'react'
import { postVolunteer } from '../../api/volunteers'


const volunteerForm = () => {

  return (
    <div>
        <form id='volunteerForm' action={process.env.backend_url + "volunteers/"} method='POST'>
            <label htmlFor='name'>Name: </label>
                <input type='text' name='name' required></input> <br/>
            <label htmlFor='email'>Email: </label>
                <input type='email' name='email' required></input> <br/>
            <label htmlFor='start_date'>Start Date: </label>
                <input type='date' name='start_date' required></input> <br/>
            <label htmlFor='category'>Category: </label>
                <select name='category' required>
                    <option defaultValue="">Please choose a category</option>
                    <option value="1">Weeds</option>
                    <option value="2">Shittake Mushrooms</option>
                    <option value="3">Eggs</option>
                    <option value="4">Bee Keeping</option>
                    <option value="5">Bamboo</option>
                </select> <br/>
            <label htmlFor='restrictionsCheck'>Any restrictions we should know about?</label>
                <input name='restrictionsCheck' type='checkbox'></input> <br/>
            <label htmlFor='restrictions'>If so what?</label>
                <input name='restrictions' type='text'></input> <br/>
            <input name='status' defaultValue='1' hidden></input>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default volunteerForm