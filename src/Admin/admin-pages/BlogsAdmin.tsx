

const BlogsAdmin = () => {



  return (
    <div>
      <div>
        <form>

          {/*  Blog Titles  choose events or blogs*/}
          <div> 
            <label >Title:</label>
            <div>
              <input 
                    type="text" 
                    id="title" 
                    name="title">
                    </input>
            </div>
          </div>


          {/* Blog Post */}
          <div>
            <label >Blog post:</label>
            <div>
              <textarea type="text" 
                        id="blogs" 
                        name="blogs">
              </textarea>
            </div>
          </div>

          {/* Upload Photo */}
          <div>
            <label ></label>
            <h2> Add image:</h2>
            <input type="file"></input>

          </div>

           {/* Post Button */}
           <div>
            <label ></label>
            <button type="submit" className="mt-2 bg-red-400 rounded-lg p-1">Post</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default BlogsAdmin