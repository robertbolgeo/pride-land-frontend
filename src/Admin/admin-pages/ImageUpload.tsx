import { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {

    const UPLOAD_URL =  process.env.media_url + 'upload-img/';
    const [image, setImage] = useState<string | ArrayBuffer | null>('');
    
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

  return (
    <>
    <div>
        <div>
       <form  onSubmit={handleSubmit}>
         <input type="file"  name='blob_img' onChange={handleFileChange}/>
         <button  className='bg-gray-400 rounded-sm p-2 mx-2' type="submit">Upload Photo</button>
       </form>
     </div>
    </div>
    </>
  )
}

export default ImageUpload