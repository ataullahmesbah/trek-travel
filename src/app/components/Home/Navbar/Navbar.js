'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState({ destination: false, gadgets: false });


  return (
    <nav className="bg-sky-950 text-white p-2 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold">Trek Explore Travel</div>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" legacyBehavior><a>Home</a></Link>
          <div
            className="relative"
            onMouseEnter={() => setSubMenuOpen({ ...subMenuOpen, destination: true })}
            onMouseLeave={() => setSubMenuOpen({ ...subMenuOpen, destination: false })}
          >
            <button className="block focus:outline-none">
              Destination
            </button>
            {subMenuOpen.destination && (
              <div className="absolute bg-blue-50 p-6 pr-10 rounded shadow-lg mt-2">
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">Bangladesh</a></Link>
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">Nepal</a></Link>
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">India</a></Link>
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">Maldives</a></Link>

              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setSubMenuOpen({ ...subMenuOpen, gadgets: true })}
            onMouseLeave={() => setSubMenuOpen({ ...subMenuOpen, gadgets: false })}
          >
            <button className="block focus:outline-none">
              Tour Gadgets
            </button>
            {subMenuOpen.gadgets && (
              <div className="absolute bg-blue-50 p-6 pr-10 rounded shadow-lg mt-2 w-64">
                <Link href="/gadgets/accessories" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">Travel Accessories</a></Link>
                <Link href="/gadgets/travel-gadget" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">Travel Gadget</a></Link>
                <Link href="/gadgets/bags" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">Sleeping Bag</a></Link>
                <Link href="/gadgets/mat" legacyBehavior><a className="block text-white  ps-2 py-1 hover:bg-gray-50 rounded-md">Mat</a></Link>
              </div>
            )}
          </div>
          <Link href="/trip-album" legacyBehavior><a>Trip Album</a></Link>
          <Link href="/travelstories" legacyBehavior><a>Travel Stories</a></Link>

          <Link href="/blogs" legacyBehavior><a>Blogs</a></Link>
          <Link href="/aboutus" legacyBehavior><a>About Us</a></Link>
          <Link href="/contactus" legacyBehavior><a>Contact</a></Link>
          <div className="relative">
            <button className="bg-sky-900 px-3 py-2 rounded hover:bg-sky-900 text-white font-medium">
              Log In
            </button>
            <div className="absolute bg-gray-700 p-2 rounded shadow-lg hidden group-hover:block">
              <Link href="/login" legacyBehavior><a className="block px-4 py-2 hover:bg-gray-600">Login</a></Link>
              <Link href="/signup" legacyBehavior><a className="block px-4 py-2 hover:bg-gray-600">Sign Up</a></Link>
            </div>
          </div>
        </div>



        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* mobile version navbar */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/" legacyBehavior><a className="block px-4 py-2">Home</a></Link>
          <div className="relative">
            <button
              onClick={() => setSubMenuOpen({ ...subMenuOpen, destination: !subMenuOpen.destination })}
              className="block px-4 py-2 focus:outline-none"
            >
              Destination
            </button>
            {subMenuOpen.destination && (
              <div className="bg-blue-50 p-2 rounded shadow-lg">
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2 ">Bangladesh</a></Link>
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2 ">Nepal</a></Link>
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2 ">India</a></Link>
                <Link href="/destination/nepal" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2 ">Maldives</a></Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setSubMenuOpen({ ...subMenuOpen, gadgets: !subMenuOpen.gadgets })}
              className="block px-4 py-2 focus:outline-none"
            >
              Tour Gadgets
            </button>
            {subMenuOpen.gadgets && (
              <div className="bg-blue-50 p-2 rounded shadow-lg">
                <Link href="/gadgets/travel-gadget" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2">Travel Accessories</a></Link>
                <Link href="/gadgets/travel-gadget" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2">Travel Gadget</a></Link>
                <Link href="/gadgets/bags" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2">Sleeping Bag</a></Link>
                <Link href="/gadgets/mat" legacyBehavior><a className="block text-white hover:bg-gray-50 rounded-md px-4 py-2">Mat</a></Link>
              </div>
            )}
          </div>
          <Link href="/trip-album" legacyBehavior><a className="block px-4 py-2">Trip Album</a></Link>
          <Link href="/travelstories" legacyBehavior><a className="block px-4 py-2">Travel Stories</a></Link>
          <Link href="/blogs" legacyBehavior><a className="block px-4 py-2">Blogs</a></Link>
          <Link href="/about" legacyBehavior><a className="block px-4 py-2">About Us</a></Link>
          <Link href="/contact" legacyBehavior><a className="block px-4 py-2">Contactus</a></Link>
          <button className="block bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
