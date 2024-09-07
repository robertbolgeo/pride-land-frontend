import { useEffect, useState } from 'react';
import * as getImageApi from '../../api/upload-images'
import axios from 'axios';

const ImageUpload = () => {

    const UPLOAD_URL =  process.env.media_url + 'upload-img/';
    const GET_URL = process.env.backend_url + 'medias/';
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [imageData, setImageData] = useState<string | ArrayBuffer | null>([]);
    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
      handleGetImageById()
    }, []);
    
    const handleFileChange = (e: React.FormEvent<HTMLFormElement>) => {
      const file = e.target.files[0];
        const data = new FileReader();
        data.onloadend = () => {
          setImage(data.result); // Extract Base64 string from data URL
        };
        data.readAsDataURL(file);
    };

    let base64string : string = '';
    
    if(image !== null){
    base64string = image.replace('data:image/jpeg;base64,',""); 
    console.log(base64string)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('blob_img', base64string);
      try {
        const response = await axios.post( UPLOAD_URL , formData);
        console.log('Server Response:', response.data);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    };

    const  handleGetImageById = async () => {
        const response = await getImageApi.fetchAllImages();
        setImageData(response)
        setSelectedImage(response[0])
    };

    const handleDataChange = (e:  React.FormEvent<HTMLInputElement>) => {
      const selectedImageId = e.target.value;
      const selected = imageData.find(image => image.id === parseInt(selectedImageId));
      setSelectedImage(selected)
      
    }

    const handleDelete = () => {
      try{
      axios.delete(GET_URL + `${selectedImage.id}/`)
      console.log("succesfully deleted!")
      }catch (error){
      console.log('error/:', error)
      }
    }

  return (
    <>
    <div>
          <div>
          <label>Choose Photo:</label>
            <select name="photo" id="userdropdown" onChange={handleDataChange}>
                {imageData.map((image, index) => (
                  <option key={index}>{image.alt_text}:{image.id}</option>
                ))}
            </select>
          </div>
            
      <div className='flex'>
        <div>
          <form  onSubmit={handleSubmit}> 
            <input type="file"  name='blob_img' onChange={handleFileChange}/>
            <button  className='bg-gray-400 rounded-sm p-2 mx-2' type="submit">Upload Photo</button>
          </form>
        </div>
        <div>
          <button onClick={() => handleDelete()} className='bg-gray-500 rounded-sm p-2 mx-2'>Delete</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default ImageUpload