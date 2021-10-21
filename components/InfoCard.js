import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex flex-col pr-4 px-2 py-7 border-b first:border-t hover:rounded-2xl hover:shadow-xl hover:opacity-80 cursor-pointer space-y-4 transition-all duration-200 ease-out md:flex-row md:space-x-4 md:space-y-0">
      <div className="relative flex-shrink-0 w-full h-60 sm:h-80 md:w-80 md:h-52">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <div className="flex justify-between">
          <p className="">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>
        <div className="pt-2 w-10 border-b" />
        <p className="flex-grow pt-2 text-gray-500 text-sm">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div className="flex flex-col items-end">
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
