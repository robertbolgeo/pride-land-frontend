const CommentsPage = () => {
    // useStates

    // useEffects

    // Helper Functions

    return (
        <div className="flex h-screen w-screen">
            <div className="(Body) grid w-1/2 h-full border-4 border-solid border-black">
                <div className="(Blog History) m-auto w-10/12 h-5/6 border-4 border-solid border-red-500">
                    Comments or Feedback Are Welcome!
                    <div>
                        Name
                        <input className="border border-solid border-black"></input> <br/>
                        Comments
                        <input className="border border-solid border-black"></input> <br/>
                        <button className="">Submit</button>
                    </div>
                </div>
            </div>
            <div className="(Image) grid w-1/2 h-full border-4 border-solid border-blue-500">
                <div className="m-auto w-96 h-40 text-center text-[80px] ">Contact Us</div>
            </div>
        </div>
    )
}

export default CommentsPage