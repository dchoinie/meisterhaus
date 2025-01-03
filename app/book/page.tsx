"use client";

import React, { JSX, useState } from "react";
import Container from "../custom_components/container";
import BookCard from "../custom_components/bookCard";
import { Room, rooms } from "../custom_components/home/rooms";
import PageTitle from "../custom_components/pageTitle";
import SEO from "../custom_components/seo";
import BookingModal from "../custom_components/bookingModal";

const Book = (): JSX.Element => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const handleBookClick = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <>
      <SEO title="Book" />
      <div className="my-24">
        <Container>
          <PageTitle title="Book" path="/book" />
          <div className="flex flex-col gap-24">
            {rooms.map((room: Room, i: number) => (
              <BookCard
                key={room.name}
                title={room.name}
                description={room.description}
                image={room.image}
                href={room.link}
                price={room.price}
                reverse={i % 2 !== 0}
                onBookClick={() => handleBookClick(room)}
              />
            ))}
          </div>
        </Container>
      </div>

      <BookingModal
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        room={selectedRoom}
        onCancel={() => setSelectedRoom(null)}
      />
    </>
  );
};

export default Book;
