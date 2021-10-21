import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className=" mt-6 max-w-7xl mx-auto p-8 sm:px-16  grid gap-10 grid-cols-2 md:grid-cols-4 ">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p className="cursor-pointer">How Airbnb works</p>
          <p className="cursor-pointer">Newsroom</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Airbnb Plus</p>
          <p className="cursor-pointer">Airbnb Luxe</p>
          <p className="cursor-pointer">HotelTonight</p>
          <p className="cursor-pointer">Airbnb for Work</p>
          <p className="cursor-pointer">Made possible by Hosts</p>
          <p className="cursor-pointer">Careers</p>
          <p className="cursor-pointer">Founders' Letter</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p className="cursor-pointer">Diversity &#38; Belonging</p>
          <p className="cursor-pointer">Accessibility</p>
          <p className="cursor-pointer">Airbnb Associates</p>
          <p className="cursor-pointer">Guest Referrals</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p className="cursor-pointer">Host your home</p>
          <p className="cursor-pointer">Host an Online Experience</p>
          <p className="cursor-pointer">Host an Experience</p>
          <p className="cursor-pointer">Responsible hosting</p>
          <p className="cursor-pointer">Resource Centre</p>
          <p className="cursor-pointer">Community Centre</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p className="cursor-pointer">Our COVID-19 Response</p>
          <p className="cursor-pointer">Help Centre</p>
          <p className="cursor-pointer">Cancellation options</p>
          <p className="cursor-pointer">Neighbourhood Support</p>
          <p className="cursor-pointer">Trust &#38; Safety</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
