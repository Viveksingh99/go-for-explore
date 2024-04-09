import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-3 px-10">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <Image
              width={200}
              height={200}
              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/go4explore-logo.png"
              alt="go4explore"
            />
          </Link>
          <div className="cursor-pointer no-underline">
            <Link href="/trips" className="no-underline text-black">
              Trips
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="upcoming-trips" className="no-underline text-black">
              Upcoming Trips
            </Link>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="text-black">
            <Link href="/" className="no-underline hover:text-black">
              +91 8700923377
            </Link>
          </div>
          <div>
            <Link href="/">
              <button className="text-white bg-sky-600 px-4 py-2 rounded-2xl">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
