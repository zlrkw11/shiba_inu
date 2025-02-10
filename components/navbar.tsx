"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="">
      <div className="sm:hidden">
        <button onClick={toggleNav}>expand</button>
      </div>
      <div
        className={`w-full ${expanded ? "block" : "hidden"} flex ${
          expanded ? "flex-col" : "hidden"
        } md:flex md:flex-row items-center justify-between shadow-md mb-2`}
      >
        <Link href="/" className="text-decoration-none hover:text-white">
          Home
        </Link>
        <Link href="/tutors" className="text-decoration-none hover:text-white">
          Tutors
        </Link>
        <Link href="/book" className="text-decoration-none hover:text-white">
          Book now
        </Link>
        <Link href="/contact" className="text-decoration-none hover:text-white">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
