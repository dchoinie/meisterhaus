import React from "react";
import Container from "../container";
import RoomCard from "../roomCard";
import { getRooms } from "@/lib/sanityClient";

export interface Room {
  _id: string;
  name: string;
  description: {
    _type: string;
    style: string;
    _key: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    markDefs: any[];
    children: {
      _type: string;
      text: string;
      marks: string[];
    }[];
  }[];
  mainImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  weekdayPrice: string;
  weekendPrice: string;
}

const Rooms = async () => {
  const rooms = await getRooms();

  return (
    <div>
      <Container>
        <div className="my-24">
          <h2 className="text-4xl font-bold text-center font-cinzel-decorative text-primary-500 mb-24">
            The Rooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {rooms.map((room: Room) => (
              <RoomCard
                key={room._id}
                name={room.name}
                description={room.description}
                image={room.mainImage}
                weekdayPrice={room.weekdayPrice}
                weekendPrice={room.weekendPrice}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Rooms;
