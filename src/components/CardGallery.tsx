import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Card from "./Card";

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
      <div className="bg-[rgb(59,102,63)] rounded-xl p-16 my-20">
        <div className="flex">
          <RadioGroup
            name="name"
            value={selected}
            onChange={setSelected}
            aria-label="Server size"
            className="w-1/4 min-w-52 bg-[#fff024] rounded-xl"
          >
            {cardRefs.map((cardRef) => (
              <Radio
                key={cardRef.name}
                value={cardRef}
                className="group relative flex cursor-pointer rounded-lg bg-[#fff024] py-4 px-5 transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:scale-110 data-[checked]:translate-x-4"
              >
                <div className="flex w-full items-center justify-between">
                  <div className="text-3xl">
                    <p className="font-semibold text-[rgb(82,49,21)]">
                      {cardRef.name}
                    </p>
                  </div>
                </div>
              </Radio>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
