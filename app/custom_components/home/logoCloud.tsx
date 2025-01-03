import React, { JSX } from "react";
import Image from "next/image";

const LogoCloud = (): JSX.Element => {
  return (
    <div className="bg-primary-500 py-8 sm:py-12">
      <h2 className="text-white text-center text-2xl font-cinzel-decorative mb-8">
        Find Us On
      </h2>
      <div className="flex justify-center gap-48">
        {/* Airbnb */}
        <div className="flex flex-col">
          <Image
            className="object-contain"
            src="/airbnb.svg"
            alt="Airbnb"
            priority
            width={75}
            height={50}
          />
          <p className="text-white text-center">Airbnb</p>
        </div>

        {/* Expedia */}
        <div className="flex flex-col">
          <Image
            className="object-contain"
            src="/expedia.svg"
            alt="Expedia"
            priority
            width={75}
            height={50}
          />
          <p className="text-white text-center">Expedia</p>
        </div>

        {/* Yelp */}
        <div className="flex flex-col">
          <Image
            className="object-contain"
            src="/yelp.svg"
            alt="Yelp"
            priority
            width={75}
            height={50}
          />
          <p className="text-white text-center">Yelp</p>
        </div>

        {/* Tripadvisor */}
        <div className="flex flex-col">
          <Image
            className="object-contain"
            src="/tripadvisor.svg"
            alt="Tripadvisor"
            priority
            width={75}
            height={50}
          />
          <p className="text-white text-center">Tripadvisor</p>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
