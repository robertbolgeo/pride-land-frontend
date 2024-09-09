import {  useEffect, useState } from 'react';
import * as getImageApi from '../../api/upload-images'
import axios from 'axios';
  
const ImageUpload = () => {

    const UPLOAD_URL =  process.env.media_url + 'upload-img/';
    const GET_URL = process.env.backend_url + 'medias/';
    const [image, setImage] = useState<string | ArrayBuffer | null >(null);
    const [imageData, setImageData] = useState<any>([]);
    const [selectedImage, setSelectedImage] = useState<any | null>(null);

    useEffect(() => {
      handleGetImageById()
    }, []);
    
  //convert Image file to base64 
  const handleFileChange = (e: any) => {
      const file = e.target.files[0];
      const data = new FileReader();
        data.onloadend = () => {
          setImage(data.result); // Extract Base64 string from data URL
        };
      data.readAsDataURL(file);
  };

    let base64string : string = '';
    
    if(image === 'string' && image !== null){
    base64string = image.replace('data:image/jpeg;base64,',""); 
    }

    //post request to upload image
    const handleSubmit = async () => {
      const formData = new FormData();
        formData.append('blob_img', base64string);
          try {
            const response = await axios.post( UPLOAD_URL , formData);
            console.log('Server Response:', response.data);
          } catch (error) {
            console.error('Error uploading image:', error);
          }
    };

    const handleDataChange = (e: any) => {
      const selectedImageId = e.target.value;
      const selected = imageData?.find((image: { id: number }) => image.id === parseInt(selectedImageId));
      setSelectedImage(selected)
    }
    
    const handleGetImageById = async () => {
        const response = await getImageApi.fetchAllImages();
        setImageData(response)
        setSelectedImage(response[0])
    };
  
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
      <div className='flex gap-2 mt-2'>
      <div>
            <select  id="userdropdown" onChange={handleDataChange}>
              {imageData?.map((image: { id: string | number | boolean |  undefined; alt_text: string}, index: number) => (
              <option key={index}>{image.id} : {image.alt_text}</option>
              ))}
            </select>
      </div>
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