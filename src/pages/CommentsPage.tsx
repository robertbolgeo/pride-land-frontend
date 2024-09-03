import { useState, useEffect } from "react"
import { postFeedback } from "../api/feedbacks"

const CommentsPage = () => {

    // useStates
    const [isSubmitted, setSubmitted] = useState<boolean>(false);
    const [commentsPageView, setCommentsPageView] = useState<JSX.Element | null>(null)


    // useEffects
    useEffect(() => {
        setCommentsPageView(initialPageView)
    })
    useEffect(() => {
        if (isSubmitted === true) {
            handleSubmittedPageView();
        }
    }, [isSubmitted])

    // Helper Functions
    const handleSubmittedPageView = () => {
        setCommentsPageView(
            <div>
                Thank you for submitting your feedback!
            </div>
        )
    }

    const handleIsSubmitted = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const formData = new FormData(event.currentTarget);
            const request= await postFeedback(formData);
            setSubmitted(true);
        } catch(error) {
            console.log("Error submitting form", error)
        }
    }

    const initialPageView = (
        <form name="CommentsForm" onSubmit={handleIsSubmitted}>
            <label>Name</label>
            <input className="border border-solid border-black"></input> <br/>
            <label>Comments</label>
            <input className="border border-solid border-black"></input> <br/>
            <button type="submit">Submit</button>
        </form>
    )

    return (
        <div className="flex h-screen w-screen">
            <div className="(Body) grid w-1/2 h-full border-4 border-solid border-black">
                <div className="(Blog History) m-auto w-10/12 h-5/6 border-4 border-solid border-red-500">
                    Comments or Feedback Are Welcome!
                    {commentsPageView}
                </div>
            </div>
            <div className="(Image) grid w-1/2 h-full border-4 border-solid border-blue-500">
                <div className="m-auto w-96 h-40 text-center text-[80px] ">Contact Us</div>
            </div>
        </div>
    )
}

export default CommentsPage