import CardPropsType from "../../interfaces/CardType"
import { Card } from "./Card"
import { useState } from "react"

const cardRefs: CardPropsType[] = [
  { id: 1, title: "Gallery", description: "View our gallery of images", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 2, title: "Cultivate", description: "Learn about our cultivation process", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 3, title: "Produce", description: "Learn about our produce", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 4, title: "Events", description: "View our upcoming events", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 5, title: "Volunteer", description: "Learn about volunteer opportunities", imgsrc: "https://via.placeholder.com/150", link: "#" },
  { id: 6, title: "Shop", description: "Shop our products", imgsrc: "https://via.placeholder.com/150", link: "#" }
];

export default function CardCarousel() {
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [mousedOver, setMousedOver] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!mousedOver) {
      timer = setInterval(() => {
        setCurrentCard((prevCard) => (prevCard + 1) % (cardRefs.length -1));
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [mousedOver, currentCard]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-700"
        style={{ transform: `translateX(-${currentCard * 33}%)` }}
        onMouseOver={() => setMousedOver(true)}
        onMouseOut={() => setMousedOver(false)}
      >
        {cardRefs.map((card, index) => (
          <Card
            key={card.id}  
            id={index}
            title={card.title}
            description={card.description}
            imgsrc={card.imgsrc}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}
