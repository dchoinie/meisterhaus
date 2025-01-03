import React, { JSX } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface RoomCardProps {
  name: string;
  image: string;
  description: string;
  link: string;
}

const RoomCard = ({
  name,
  image,
  description,
  link,
}: RoomCardProps): JSX.Element => {
  return (
    <Card className="shadow-lg flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-cinzel-decorative text-primary-500">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <AspectRatio ratio={16 / 9}>
          <Image src={image} alt={name} fill className="object-cover" />
        </AspectRatio>
        <CardDescription className="mt-6">{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          asChild
          className="bg-primary-500 hover:bg-primary-600 text-white font-cinzel-decorative"
        >
          <Link href={link}>Request Booking</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
