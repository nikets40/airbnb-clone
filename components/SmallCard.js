import React from "react";
import Image from "next/image";

function SmallCard({ image, location, distance }) {
  return (
    <div
      className="flex items-center mt-5 m-2 space-x-4 
                rounded-xl cursor-pointer hover:bg-gray-100 duration-300 ease-out hover:scale-105"
    >
      {/* Left Side */}
      <div className="relative h-16 w-16 ">
        <Image src={image} layout="fill" className="rounded-lg" />
      </div>

      {/* Right Side */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
