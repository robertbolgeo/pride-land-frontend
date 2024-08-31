import React from 'react'

const volunteerForm = () => {
    console.log()
  return (
    <div>
        <form>
            <label htmlFor='id'>id: </label>
                <input type='text' id='id' required></input> <br/>
            <label htmlFor='email'>Email: </label>
                <input type='email' id='email' required></input> <br/>
            <label htmlFor='startDate'>Start Date: </label>
                <input type='date' id='startDate' required></input> <br/>
            <label htmlFor='category'>Category: </label>
                <select id='category' required>
                    <option value="">Please choose a category</option>
                    <option value="1">Weeds</option>
                    <option value="2">Shittake Mushrooms</option>
                    <option value="3">Eggs</option>
                    <option value="4">Bee Keeping</option>
                    <option value="5">Bamboo</option>
                </select> <br/>
            <label htmlFor='restrictionsCheck'>Any restrictions we should know about?</label>
                <input id='restrictionsCheck' type='checkbox'></input> <br/>
            <label htmlFor='restrictions'>If so what?</label>
                <input id='restrictionsCheck' type='text'></input> <br/>
            <input type='submit' value={"Submit"}/>
        </form>
    </div>
  )
}

export default volunteerForm