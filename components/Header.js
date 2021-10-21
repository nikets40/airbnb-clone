import React, { useState } from "react";
import Image from "next/image";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);

  const router = useRouter();
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setStartDate(new Date());
    setEndDate(new Date());
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
    setSearchInput("");
  };

  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      {/* Left Section - Logo */}
      <div className="relative flex items-center h-10">
        <Image
          onClick={() => router.push("/")}
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
        />
      </div>
      {/* Middle Section - Search */}
      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-md">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && search()}
          className="placeholder-gray-400 flex-grow pl-5 text-gray-600 text-sm bg-transparent outline-none"
          type="text"
          placeholder={placeholder || "Start Your Search"}
        />
        <SearchIcon className="hidden mx-2.5 p-2 h-8 text-white bg-red-400 rounded-full cursor-pointer md:inline-flex" />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden cursor-pointer md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 border-2 rounded-full space-x-2">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mt-4 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center mb-4 border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuest}
              onChange={(val) => setNoOfGuest(val.target.value)}
              min={1}
              max={99}
              className="pl-2 w-12 text-red-400 text-lg outline-none"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={() => search()} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
