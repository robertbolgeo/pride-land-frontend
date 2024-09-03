import React, { useEffect } from 'react'
import { useState } from 'react'
import { HeroImage } from '../admin-interface/GalleryTypes';
import CardPropsType from '../../interfaces/CardType';
import * as layoutApi from '../admin-api/admin-layout';
import AdminCard from '../admin-components/AdminCard';

const Layout = () => {
  // const [heroimages, setHeroImages] = useState<HeroImage[] | null>(null);
  // const [cardrefs, setCardRefs] = useState<CardPropsType[] | null>(null);

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

const heroimages = [
  { img: "../src/assets/chickens.jpg", alt: "chickens", dateAdded: "2022-01-01" },
  { img: "../src/assets/volunteers.jpg", alt: "Volunteers", dateAdded: "2022-01-02" },
  { img: "../src/assets/eggs.jpg", alt: "Eggs", dateAdded: "2022-01-03" },
  { img: "../src/assets/vegetable.jpg", alt: "farm work", dateAdded: "2022-01-04" },
  { img: "../src/assets/shiitake.jpg", alt: "mountain work", dateAdded: "2022-01-05" },
];

const cardrefs: CardPropsType[] = [
  { id: 1, title: "Gallery", description: "View our gallery of images", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 2, title: "Blog", description: "Read about what's happening on the farm", imgsrc: "https://via.placeholder.com/150", link: "/blog" },
  { id: 3, title: "Produce", description: "Learn about our produce", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 4, title: "Events", description: "View our upcoming events", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 5, title: "Volunteer", description: "Learn about volunteer opportunities", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 6, title: "Shop", description: "Shop our products", imgsrc: "https://via.placeholder.com/150", link: "#" }
];


  return (
    <div className='w-full'>
        <h2>Please choose 5 images for your Top Images</h2>
        <div className="snap-x snap-mandatory align-middle bg-gray-200 p-10 overflow-scroll rounded-md grid grid-rows-1 grid-flow-col gap-6 overflow-x-auto">
          {/* make a container that holds all of the images in the db */}
          {/* create a method to click 5 of those images and set them as selected for the front page. */}
          {/* add a button to add images to the db */}

        {heroimages?.map((image) => 
        <div className="m-6 w-[400px]">
            <img src={image.img} alt={image.alt} className="rounded-md h-full w-full" />
            <p>{image.alt}</p>
        </div>
        )}
        </div>
{/* add a break to separate page elements */}
        <br />
        <h2>Please choose 6 categories for your Card Categories</h2>
        <div
        className="flex w-[80%] overflow-scroll">
        {cardrefs.map((card, index) => (
          <div className="m-6 w-[400px]">
          <AdminCard
            key={card.id}  
            id={index}
            title={card.title}
            description={card.description}
            imgsrc={card.imgsrc}
            link={card.link}
          />
          </div>
        ))}
        </div>
    </div>
  )
}

export default Layout