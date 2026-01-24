"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useBibleState } from "./StateProvder";
import Image from "next/image";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { resetAll } = useBibleState();

  return (
    <nav className="bg-[#7b1fa2] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex  justify-items-end items-center   font-bold">
            <Image alt="logo" src="/logo.png " width={100} height={100} />
            <p className="  p-[3.5rem]">TWW Bible</p>
          </div>

          {/*Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-200" onClick={resetAll}>
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XMarkIcon className=" w-4 h-4 " />
              ) : (
                <Bars3Icon className="w-4 h-4 " />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" md:hidden bg-[#4a148c]">
          <Link
            onClick={resetAll}
            href="/"
            className="block px-4 py-2 focus:bg-[#9575CD]"
          >
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 focus:bg-[#9575CD]">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 focus:bg-[#9575CD]">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
