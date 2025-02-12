"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className="">
      <div className="sm:hidden">
        <Button
          onClick={toggleNav}
          variant="outline"
          size="lg"
          className="mt-[200px] font-bold"
        >
          expand
        </Button>
      </div>
      <div
        className={`w-full ${expanded ? "block" : "hidden"} flex ${
          expanded ? "flex-col" : "hidden"
        } md:flex md:flex-row items-center justify-between shadow-md pt-2 pb-2`}
      >
        <Link
          href="/"
          className="text-decoration-none hover:text-black text-orange-500"
        >
          Home
        </Link>
        <Link
          href="/tutors"
          className="text-decoration-none hover:text-black text-orange-500"
        >
          Order
        </Link>

        <Link
          href="/contact"
          className="text-decoration-none hover:text-black text-orange-500"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
