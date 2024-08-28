import CardPropsType from "../interfaces/CardType"
import { Card } from "./Card"
import { useState } from "react"

const cardRefs: CardPropsType[] = [{id: 1, title: "Gallery", description: "View our gallery of images", imgsrc: "https://via.placeholder.com/150", link: "#"}, {id: 2, title: "Cultivate", description: "Learn about our cultivation process", imgsrc: "https://via.placeholder.com/150", link: "#"}, {id: 3, title: "Produce", description: "Learn about our produce", imgsrc: "https://via.placeholder.com/150", link: "#"}, {id: 4, title: "Events", description: "View our upcoming events", imgsrc: "https://via.placeholder.com/150", link: "#"}, {id: 5, title: "Volunteer", description: "Learn about volunteer opportunities", imgsrc: "https://via.placeholder.com/150", link: "#"}, {id: 6, title: "Shop", description: "Shop our products", imgsrc: "https://via.placeholder.com/150", link: "#"}]

export default function CardCarousel() {

   const [currentCard, setCurrentCard] = useState<number>(0);
   
   const handleNext = () => {
      if (currentCard === cardRefs.length - 1) {
         setCurrentCard(0);
      } else
   setCurrentCard((currentCard + 1));
   }

   // const timer = setInterval((handleNext, 3000)


   return (


      <div className="overflow-hidden relative">
          <div className="flex transition ease-out duration-700" style={{ transform: `translateX(-${currentCard * 33}%)` }}>
               {cardRefs.map((card, index) => (
                     <Card id={index} title={card.title} description={card.description} imgsrc={card.imgsrc} link={card.link} />
               ))}
               </div>
          </div>

   )
}