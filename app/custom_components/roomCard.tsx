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
        <Image src={image} alt={name} width={600} height={600} />
        <CardDescription className="mt-6">{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          asChild
          className="bg-primary-500 hover:bg-primary-600 text-white font-cinzel-decorative"
        >
          <Link href={link}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
