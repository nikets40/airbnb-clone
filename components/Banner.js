import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom center"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          className="text-purple-500 bg-white rounded-full 
                px-10 py-4 shadow-md font-bold my-3 hover:shadow-xl 
                active:scale-90 transition duration-200"
        >
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
