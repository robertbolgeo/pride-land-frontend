import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CardGalleryCarousel from "./CardGalleryCarousel";

const cardRefs = [
  { name: "Gallery", href: "#" },
  { name: "Cultivate", href: "#" },
  { name: "Produce", href: "#" },
  { name: "Events", href: "#" },
  { name: "Volunteer", href: "#" },
  { name: "Shop", href: "#" },
];

export default function CardGallery() {
  const [selected, setSelected] = useState(cardRefs[0]);

  return (
    <div className="(Component containment block) w-full px-4">
      <div className="bg-[#fff569] rounded-xl p-16 my-20">
        <div className="flex">
          <RadioGroup
            name="name"
            value={selected}
            onChange={setSelected}
            aria-label="Server size"
            className="space-y-3 w-1/4 min-w-52"
          >
            {cardRefs.map((cardRef) => (
              <Radio
                key={cardRef.name}
                value={cardRef}
                className="group relative flex cursor-pointer rounded-lg bg-[#fff024] py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-3xl">
                    <p className="font-semibold text-white">{cardRef.name}</p>
                  </div>
                  <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                </div>
              </Radio>
            ))}
          </RadioGroup>
          <CardGalleryCarousel />
          <CardGalleryCarousel />
          <CardGalleryCarousel />
        </div>
      </div>
    </div>
  );
}
