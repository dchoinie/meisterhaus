import React, { JSX } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface BookCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  price: number;
  reverse?: boolean;
  onBookClick: () => void;
}

const BookCard = ({
  title,
  description,
  image,
  price,
  reverse = false,
  onBookClick,
}: BookCardProps): JSX.Element => {
  return (
    <div className="border border-primary-200 rounded-lg p-6 h-full">
      <div className={`flex gap-12 ${reverse ? "flex-row-reverse" : ""}`}>
        <div className="w-1/2 relative">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={image}
              alt={title}
              fill
              className="h-auto w-full shadow-lg"
              quality={100}
            />
          </AspectRatio>
        </div>
        <div className="flex flex-col w-1/2 justify-between">
          <div>
            <h2 className="text-3xl font-cinzel-decorative font-bold text-primary-500 mb-3">
              {title}
            </h2>
            <p className="text-gray-500 text-base mb-4">{description}</p>
            <div className="flex">
              <span className="text-2xl font-bold font-cinzel-decorative text-primary-500">
                ${price.toFixed(2)}
                <span className="text-sm text-gray-500">/night</span>
              </span>
            </div>
          </div>
          <Button
            onClick={onBookClick}
            variant="default"
            className="bg-primary-500 text-white"
          >
            Request Booking
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
