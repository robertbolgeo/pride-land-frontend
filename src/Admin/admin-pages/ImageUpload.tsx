import { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {

    const [image, setImage] = useState<string | ArrayBuffer | null>('');

    // Function to handle file input change
    const handleFileChange = (e: React.FormEvent<HTMLFormElement>) => {
      const file = e.target.files[0];
        const data = new FileReader();
        data.onloadend = () => {
          setImage(data.result); // Extract Base64 string from data URL
        };
        data.readAsDataURL(file);
      
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(image)
      const formData = new FormData();
      formData.append('blob_img', image);
      
      console.log(formData)
      try {
        const response = await axios.post(, formData);
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
         <input type="file"  name='blob_img'  onChange={handleFileChange}/>
         <button type="submit">Upload</button>
       </form>
     </div>
    </div>
    </>
  )
}

export default ImageUpload


// import axios from 'axios';

// const ImageUpload = () => {

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//           e.preventDefault()  
//           const formData = new FormData(e.currentTarget);
//           console.log(formData)
//         try {
//           const response = await axios.post('http://127.0.0.1:8000/media/upload-img/', formData);
//           console.log('Server Response:', response.data);
//         } catch (error) {
//           console.error('Error uploading image:', error);
//         }
//     };

//   return (
//     <>
//     <div>
//       <form  onSubmit={handleSubmit}>
//         <input type="file"  name='blob_img' />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//     </>
//   )
// }

// export default ImageUpload