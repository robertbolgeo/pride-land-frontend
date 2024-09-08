import React from 'react'
import { useEffect,useState } from 'react';
import * as getImageApi from '../../api/upload-images'
import * as blogsPostApi from "../admin-api/admin-blogs";
import * as blogsApi from "../../api/blogs"

const AdminPostBlog = () => {
const [imageData, setImageData] = useState<string | ArrayBuffer | null>([]);
const [selectedImage, setSelectedImage] = useState();

useEffect(()=>{
    handleGetImageById()
  },[]);

const handleDataChange = (e:  React.FormEvent<HTMLInputElement>) => {
    const selectedImageId = e.target.value;
    const selected = imageData.find(image => image.id === parseInt(selectedImageId));
    setSelectedImage(selected)
}

const  handleGetImageById = async () => {
    const response = await getImageApi.fetchAllImages();
    setImageData(response)
    setSelectedImage(response[0])
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try{
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const response = await blogsPostApi.postBlogs(formData);
      console.log("Form submitted!", response)
    } catch (error){
      console.log("error:" , error)
    }
  } 

  return (
  <>
  <div>
  <div>
        <form name="blogPost" method="POST" onSubmit={handleSubmit}>
          {/*  Blog Titles  choose events or blogs*/}
          <div> 
            <label >Title:</label>
            <div>
              <input 
                    type="text" 
                    id="name" 
                    name="name"
                    >
                    </input>
            </div>
          </div>
          {/* Blog Post */}
          <div>
            <label >Blog post:</label>
            <div>
              <textarea 
                        id="text" 
                        name="text"
                        >
              </textarea>
            </div>
          </div>
         <div>
          <div>
          <label>Choose Photo:</label>
          </div>
          <select name="photo" id="userdropdown" onChange={handleDataChange}>
                {imageData.map((image, index) => (
                  <option key={index}>{image.alt_text}:{image.id}</option>
                ))}
            </select>
         </div>
      {/* Post Button */}
          <div>
            <label ></label>
            <button type="submit" className="mt-2
             bg-red-400 rounded-lg p-1">Post</button>
          </div>
        </form>
      </div>
  </div>
  
  
  </>
  )
}

export default AdminPostBlog