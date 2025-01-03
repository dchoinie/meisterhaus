import React, { JSX } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = (): JSX.Element => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="/lake_sakatah.webp"
        alt="Lake Sakatah"
        fill
        priority
        quality={100}
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-neutral-50 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40">
        <h1
          className={`text-5xl font-bold font-cinzel-decorative text-primary-100`}
        >
          Meisterhaus Bed & Breakfast
        </h1>
        <p className="text-xl max-w-2xl px-4 text-primary-200 mb-8">
          A perfect getaway for you to play, relax, rejuvinate and reconnect
        </p>
        <div className="flex gap-4">
          <Button
            variant="default"
            className="bg-primary-500 font-cinzel-decorative"
            asChild
          >
            <Link href="/book">Request Booking</Link>
          </Button>
          <Button
            variant="outline"
            className="bg-transparent font-cinzel-decorative"
            asChild
          >
            <Link href="/rooms">View Rooms</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
