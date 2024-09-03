import { useState, useEffect } from "react"
import { postFeedback } from "../api/feedbacks"

const CommentsPage = () => {

    // useStates
    const [isSubmitted, setSubmitted] = useState<boolean>(false);
    const [commentsPageView, setCommentsPageView] = useState<JSX.Element | null>(null)


    // useEffects
    useEffect(() => {
        if (commentsPageView === null) {
            setCommentsPageView(initialPageView);
        }
    }, )
    useEffect(() => {
        if (isSubmitted === true) {
            handleIsSubmittedPageView();
        }
    }, [isSubmitted])

    // Helper Functions
    const handleIsSubmittedPageView = () => {
        setCommentsPageView(
            <div className="h-full w-full grid">
                <div className="m-auto">Thank you for submitting your feedback!</div>
            </div>
        )
    }

    const handleIsSubmitted = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
            const formData = new FormData(event.currentTarget);
            const request = await postFeedback(formData);
            setSubmitted(true);
            return request;
        } catch(error) {
            console.log("Error submitting form", error)
        }
    }

    const initialPageView = (
        <form name="CommentsForm" onSubmit={handleIsSubmitted}>
            <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' required className="border border-solid border-black"></input> <br/>
            <label htmlFor='comments'>Comments</label>
                <input type='text' id='comment' name='comment' required className="border border-solid border-black"></input> <br/>
            <button type="submit">Submit</button>
        </form>
    )

    return (
        <div className="flex h-screen w-screen">
            <div className="(Body) bg-gradient-to-br from-green-300 to-white font-sans grid w-1/2 h-full">
                <div className="m-auto w-10/12 h-5/6">
                    <h1 className="text-center">Comments or Feedback Are Welcome!</h1>
                    {commentsPageView}
                </div>
            </div>
            <div className="(Image) grid w-1/2 h-full">
                <div className="m-auto w-96 h-40 text-center text-[80px] ">Contact Us</div>
            </div>
        </div>
    )
}

export default CommentsPage