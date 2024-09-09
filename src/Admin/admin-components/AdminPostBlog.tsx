import React from 'react'
import { useEffect,useState } from 'react';
import * as getImageApi from '../../api/upload-images'
import axios from 'axios';

interface Image {
  id: number,
  blob_img : string,
  set_as_hero : boolean,
  alt_text : string,
}

const AdminPostBlog = () => {

const [imageData, setImageData] = useState<any>(null);
const [selectedImage, setSelectedImage] = useState();
const [formData, setFormData] = useState({
    name: "",
    text: "",
    img_url: "",
});

useEffect(()=>{
    handleGetImageById()
},[]);

const handleChange = (key: string, e:React.FormEvent<HTMLInputElement> ) => {
    let value = e.target.value;

    if (key === 'img_url') {
        value = imageData.find(image => image.id == value)
    }
    console.log(typeof value, value)
    const newData = {...formData, [key]: value}
    setFormData(newData)
}


const  handleGetImageById = async () => {
    const response = await getImageApi.fetchAllImages();
    setImageData(response)
    setSelectedImage(response[0])
};

const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/blogs/' , formData);
      console.log("Form submitted!", response);
    } catch (error){
      console.log("error:" , error)
    }
  } 
  
  return (
  <>
  <div>
  <div>
     <form name="blogPost" method="POST" onSubmit={handleSubmit}>
          <div> 
            <label htmlFor='name'>Title:</label>
            <div>
              <input
               onChange={e => handleChange('name', e)} type="text" id="name" name="name">
                </input>
            </div>
          </div>
          {/* Blog Post */}
          <div>
            <label >Blog post:</label>
            <div>
              <textarea 
                onChange={e => handleChange('text', e)} id="text" name="text" >
              </textarea>
            </div>
          </div>
         <div>
            <label>Choose Photo:</label>
                <select id="img_url" name="img_url" onChange={e => handleChange('img_url', e)}>
                   {imageData?.map((image, index) => (
                        <option key={index} value={image.id}>{image.id}</option>
                    ))} 
                </select>
             </div>
      {/* Post Button */}
          <div>
            <label ></label>
            <button className="mt-2
             bg-red-400 rounded-lg p-1" type='submit'>Post</button>
          </div>
        </form>
      </div>
  </div>
  </>
  )
}

export default AdminPostBlog