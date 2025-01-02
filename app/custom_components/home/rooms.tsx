import React, { JSX } from "react";
import Container from "../container";
import RoomCard from "../roomCard";

const rooms = [
  {
    name: "The Pheasant Room",
    image: "/pheasant_1.png",
    description:
      "Experience comfort in our outdoors-themed suite featuring a premium Sleep Number bed. Adorned with rustic decor and pheasant motifs, this room offers the perfect blend of wilderness charm and modern luxury. Wake up refreshed and ready to explore.",
    link: "/rooms/the-pheasant-room",
  },
  {
    name: "Oma's Room",
    image: "/oma_1.jpg",
    description:
      "Step into the warmth of our German-inspired suite, where Old World charm meets modern comfort. Featuring elegant European furnishings and delicate touches that honor our German heritage, Oma's Room offers a cozy retreat that feels like visiting grandmother's cherished home.",
    link: "/rooms/oma-s-room",
  },
  {
    name: "The Beach Room",
    image: "/beach_1.jpg",
    description:
      "Escape to coastal tranquility in our beach-themed suite. With soothing ocean colors, seashell accents, and breezy decor, this room captures the essence of seaside living. Drift off to sleep to the gentle ambiance of our coastal-inspired retreat.",
    link: "/rooms/the-beach-room",
  },
];

const Rooms = (): JSX.Element => {
  return (
    <div>
      <Container>
        <div className="my-24">
          <h2 className="text-4xl font-bold text-center font-cinzel-decorative text-primary-500 mb-24">
            Rooms
          </h2>
          <div className="grid grid-cols-3 gap-12">
            {rooms.map((room) => (
              <RoomCard
                key={room.name}
                name={room.name}
                image={room.image}
                description={room.description}
                link={room.link}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Rooms;
