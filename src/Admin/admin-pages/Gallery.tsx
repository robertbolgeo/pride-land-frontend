import React, { useEffect } from 'react'
import { useState } from 'react'
import { HeroImage } from '../admin-interface/GalleryTypes';
import CardPropsType from '../../interfaces/CardType';
import * as layoutApi from '../admin-api/admin-layout';

const Layout = () => {
  const [heroimages, setHeroImages] = useState<HeroImage[] | null>(null);
  const [cardrefs, setCardRefs] = useState<CardPropsType[] | null>(null);

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

const images = [
  { img: "../src/assets/chickens.jpg", alt: "chickens", dateAdded: "2022-01-01" },
  { img: "../src/assets/volunteers.jpg", alt: "Volunteers", dateAdded: "2022-01-02" },
  { img: "../src/assets/eggs.jpg", alt: "Eggs", dateAdded: "2022-01-03" },
  { img: "../src/assets/vegetable.jpg", alt: "farm work", dateAdded: "2022-01-04" },
  { img: "../src/assets/shiitake.jpg", alt: "mountain work", dateAdded: "2022-01-05" },
];

  return (
    <div className="Layout-container flex">
      <div className="hero-images text-center w-full">
        <h2>Please choose 5 images for your Top Images</h2>
        <div className="flex snap-x snap-mandatory align-middle  ">
        {images?.map((image) => 
          <div key={image.img} className='mx-16'>
            <img src={image.img} alt={image.alt} className="rounded-md" />
            <p>{image.dateAdded}</p>
          </div>
        )}
        </div>

    </div>
    </div>
  )
}

export default Layout