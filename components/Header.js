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

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = ()=>{
      setStartDate(new Date);
      setEndDate(new Date);
      setSearchInput('');
  }

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 
        bg-white shadow-md p-5 md:px-10"
    >
      {/* Left Section - Logo */}
      <div className="relative flex items-center h-10">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
        />
      </div>
      {/* Middle Section - Search */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-md py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent text-sm text-gray-600 outline-none placeholder-gray-400"
          type="text"
          placeholder="Start Your Search"
        />
        <SearchIcon
          className="mx-2.5 hidden md:inline-flex h-8 bg-red-400 text-white 
            rounded-full p-2 cursor-pointer"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 p-2 border-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center mb-4 border-b">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuest}
              onChange={(val) => setNoOfGuest(val.target.value)}
              min={1}
              max={99}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>cancel</button>
            <button className="flex-grow text-red-400">search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
