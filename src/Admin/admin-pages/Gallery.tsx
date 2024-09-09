import React, { ChangeEventHandler, useEffect } from 'react'
import { useState } from 'react'
import { AdminCardPropsType, HeroImage, AdminCardDataPropsType, AdminCardRefPropsType } from '../admin-interface/AdminGalleryTypes';
import CardPropsType from '../../interfaces/CardType';
import * as layoutApi from '../admin-api/admin-layout';
import AdminCard from '../admin-components/AdminCard';
import { FaCircleXmark } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import axios from 'axios';
import ImageUpload from './ImageUpload';


const heroimages = [
  { img: "../src/assets/chickens.jpg", alt: "chickens", dateAdded: "2022-01-01", href: "#" },
  { img: "../src/assets/volunteers.jpg", alt: "Volunteers", dateAdded: "2022-01-02", href: "#" },
  { img: "../src/assets/eggs.jpg", alt: "Eggs", dateAdded: "2022-01-03", href: "#" },
  { img: "../src/assets/vegetable.jpg", alt: "farm work", dateAdded: "2022-01-04", href: "#" },
  { img: "../src/assets/shiitake.jpg", alt: "mountain work", dateAdded: "2022-01-05", href: "#" },
  { img: "../src/assets/pudding.png", alt: "pudding", dateAdded: "2022-01-06", href: "#" },
  { img: "../src/assets/prideland.png", alt: "prideland", dateAdded: "2022-01-07", href: "#" },
];

const Layout = () => {
  const [heroImages, setHeroImages] = useState<HeroImage[] | null>(heroimages);
  const [newImage, setNewImage] = useState<string | ArrayBuffer | null>(null);
  const [selectedImages, setSelectedImages] = useState<HeroImage[] | null>(null);
  const [selectedCard, setSelectedCard] = useState<CardPropsType | null>(null);
  const [cardEditView, setCardEditView] = useState<string>("none");
  const [cardData, setCardData] = useState<AdminCardDataPropsType>({
    id: 0,
    title: "",
    description: "",
    imgsrc: "",
    link: "#",
    setCardEditView: () => {"none"},

  });
  const [cardrefs, setCardRefs] = useState<AdminCardRefPropsType[]>([
    { id: 1, title: "Gallery", description: "View our gallery of images", imgsrc: "../src/assets/cardassets/bamboo.png", link: "#", setCardEditView: () => {"imgsrc"}},
    { id: 2, title: "Blog", description: "Read about what's happening on the farm", imgsrc: "../src/assets/cardassets/goat.png", link: "/blog", setCardEditView: () => {"imgsrc"}},
    { id: 3, title: "Produce", description: "Learn about our produce", imgsrc: "../src/assets/cardassets/cucumber.png", link: "#", setCardEditView: () => {"imgsrc"}},
    { id: 4, title: "Events", description: "View our upcoming events", imgsrc: "../src/assets/cardassets/chickens.png", link: "#", setCardEditView: () => {"imgsrc"}},
    { id: 5, title: "Volunteer", description: "Learn about volunteer opportunities", imgsrc: "../src/assets/cardassets/yellowwall.png", link: "#", setCardEditView: () => {"imgsrc"}},
    { id: 6, title: "Shop", description: "Shop our products", imgsrc: "../src/assets/prideland.png", link: "#", setCardEditView: () => {"imgsrc"}},
  ]);
  // const [heroimages, setHeroImages] = useState<HeroImage[] | null>(null);
  // const [cardrefs, setCardRefs] = useState<CardPropsType[] | null>(null);


  let base64string : string = '';
//   useEffect(() => {
//     getHeroImages();
//     getCardRefs();
//   }, [])

// const getHeroImages = async() => {
//   const result = await layoutApi.getHeroImages();
//   result.sort((a: HeroImage, b: HeroImage) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
//   setHeroImages(result);
// }

//   const getCardRefs = async() => {
//     const result = await layoutApi.getCardRefs();
//     result.sort((a: CardPropsType, b: CardPropsType) => b.id - a.id);
//     setCardRefs(result);
//   }

const handleImageChange = (e: React.FormEvent<HTMLFormElement>) => {
  const file = e.target.files[0];
  const data = new FileReader();
  data.onloadend = () => {
    const newImage = data.result;
    setHeroImages((prevImages) => {
      if (prevImages === null) {
        return [{ img: newImage, alt: "new image", dateAdded: new Date().toISOString(), href: "#" }];
      }
      return [...prevImages, { img: newImage, alt: "new image", dateAdded: new Date().toISOString(), href: "#" }];
    });
    setNewImage(newImage);
  };
  data.readAsDataURL(file);
}

const handleNewImage = async() => {
  const formData = new FormData();
  formData.append('blob_img', base64string);
    try {
      const response = await axios.post( UPLOAD_URL , formData);
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
};

const deleteImageFromDb = async(image: HeroImage) => {
  await layoutApi.deleteImage(image);
}
// const submitSelectedImages = async() => {
//   if (selectedImages === null) {
//     alert("Please select 5 images");
//     return;
//   }
//   await layoutApi.updateHeroImages(selectedImages);
//   setSelectedImages(null);
// }

// const removeSelectedImage = async(image: HeroImage) => {
//   await layoutApi.removeSelectedImage(image);
// }
const handleFieldChange = (field: string, value: string) => {
  setCardData((prevData) => {
    const updatedData = { ...prevData, [field]: value };

    setCardRefs((prevCardRefs) =>
      prevCardRefs.map((card) =>
        card.id === updatedData.id ? { ...card, [field]: value } : card
      )
    );
    
    return updatedData;
  });
};

const handleSetSelectedImages = (image: HeroImage) => {
  if (selectedImages?.length === 5) {
    alert("You can only select 5 images");
    return;
  }
  if (selectedImages?.find((selectedImage) => selectedImage.img === image.img)) {
    alert("You have already selected this image");
    return;
  }
  if (selectedImages !== null) {
  setSelectedImages([...selectedImages, image]);
  }
  else {
    setSelectedImages([image]);
  }
}

const addHeroTagToImg = async(image: HeroImage) => {
  await layoutApi.addHeroTagToImg(image);
}

const renderContent = () => {
  switch (cardEditView) {
    case "title":
      return (
        <input
          type="text"
          value={cardData.title}
          onChange={(e) => handleFieldChange("title", e.target.value)}
          className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        />
      );
    case "description":
      return (
        <textarea
          value={cardData.description}
          onChange={(e) => handleFieldChange("description", e.target.value)}
          className="mb-4 font-normal text-gray-700 dark:text-gray-400"
        />
      );
    case "imgsrc":
      return (
        <input
          type="text"
          value={cardData.imgsrc}
          onChange={(e) => handleFieldChange("imgsrc", e.target.value)}
          className="rounded-t-md w-full h-[50%]"
        />
      );
    case "link":
      return (
        <input
          type="text"
          value={cardData.link}
          onChange={(e) => handleFieldChange("link", e.target.value)}
          className="text-blue-500 underline"
        />
      );
    default:
      return (
        <>
          <h5 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {cardData.title}
          </h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            {cardData.description}
          </p>
          <img className="rounded-t-md w-full h-[50%]" src={cardData.imgsrc} alt="" />
          <a href={cardData.link} className="text-blue-500 underline">
            {cardData.link}
          </a>
        </>
      );
  }
};




  return (
    <div className='w-1/2'>
      <div className="hero-images-container">
        <h2>Please choose 5 images for your Top Images</h2>
        <div className="snap-x snap-mandatory align-middle bg-gray-200 p-10 overflow-scroll rounded-md grid grid-rows-1 grid-flow-col gap-6 overflow-scroll w-5/6">
          {/* make a container that holds all of the images in the db */}
          {/* create a method to click 5 of those images and set them as selected for the front page. */}
          {/* add a button to add images to the db */}

        {heroImages?.map((image) => 
        <div className="m-6 w-[400px] relative text-center">
        <button className="m-6 w-[400px] focus:border-4 focus:border-indigo-400" onClick={() => {handleSetSelectedImages(image); addHeroTagToImg(image)}}>
          <img src={image.img} alt={image.alt} className="rounded-md w-full"/>
            <p>{image.alt}</p>
        </button>
        <FaCircleXmark className="w-10 h-10 text-red-600 bg-black rounded-full absolute top-2 -right-10 cursor-pointer" onClick={() => {setHeroImages(heroImages.filter((selectedImage) => selectedImage.img !== image.img)); deleteImageFromDb(image)}}/>
          {/* change this onClick to add a remove image from db function with an alert */}
        </div>
        )}
        <form onSubmit={handleNewImage}>
        <input type="file" name="newImage" onChange={handleImageChange}/>
        <button type="submit" className='m-6 text-center w-36 bg-gray-400'>Add a new Image
        </button>
        </form>
        </div>
        <h2>Your selected Images:</h2>
        <div className="flex grid grid-rows-a grid-flow-col bg-gray-200 overflow-scroll w-5/6">
          {selectedImages?.map((image) => 
          <div className="m-6 w-[400px] relative text-center">
            <img src={image.img} alt={image.alt} className="rounded-md w-full"/>
            <p>{image.alt}</p>
            <FaCircleXmark className="w-10 h-10 text-red-600 bg-black rounded-full absolute -top-4 -right-4 cursor-pointer" onClick={() => setSelectedImages(selectedImages.filter((selectedImage) => selectedImage.img !== image.img))}/>
          </div>
          )}

        </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setSelectedImages([])}>Save Selection</button>
        </div>
{/* add a break to separate page elements */}
        <br />
        <h2>Create Cards for your Activities Portal</h2>
        <div className="snap-x snap-mandatory align-middle bg-gray-200 p-10 overflow-scroll rounded-md grid grid-rows-1 grid-flow-col gap-6 overflow-scroll w-5/6">
          {/* make a container that holds all of the categories in the db */}
          {/* create a method to click 6 of those categories and set them as selected for the front page. */}
          {/* add a button to add categories to the db */}
        {cardrefs.map((card:AdminCardPropsType, index) => (
          <div className="m-6 w-[400px]" onClick={() => setCardData(card)}>
          <AdminCard
            setCardRefs={setCardRefs}
            card={card}
            cardrefs={cardrefs}
            key={card.id}  
            id={index}
            title={card.title}
            description={card.description}
            imgsrc={card.imgsrc}
            link={card.link}
            setCardEditView={setCardEditView}
           />

          </div>
        ))}
        </div>
        <ImageUpload/>
        {renderContent()}
        </div>
  )
}

export default Layout