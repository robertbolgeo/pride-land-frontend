import { useState } from "react"



const volunteerForm = () => {
    const [isSubmitted, setSubmitted] = useState<boolean>(false);

    const handleIsSubmitted = () => {
        document.forms[0].submit()
        !isSubmitted ? setSubmitted(true) : setSubmitted(false)
    }
    

  return (
    <div>
        <iframe name="dummyframe" id="dummyframe" hidden></iframe>  
        {!isSubmitted ? (
            <form name="myForm" target="dummyframe" action={process.env.backend_url + "volunteers/"} method='POST'>
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
                <button type='reset' onClick={handleIsSubmitted}>submit</button>
            </form>
        ) : (
            <div>thank you!</div>
        )}
    </div>
  )
}

export default volunteerForm