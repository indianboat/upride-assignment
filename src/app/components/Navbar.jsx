import React from 'react';
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import Image from 'next/image';

const Navbar = () => {

  return (
    <>
      <nav className='sticky bg-white top-0 flex flex-row justify-between w-full gap-x-2 py-5 lg:px-6 md:px-5 sm:px-3 px-2 shadow-md'>
        <div className="flex gap-x-4">
          <form>
            <div className="flex">
              <div className="shadow-md rounded-3xl py-1 w-fit flex px-1">
                <input type="text" placeholder='Search bookings' className='rounded-full lg:w-60 md:w-52 sm:w-44 w-36 outline-none px-3' />
                <button className='p-2 rounded-full search-btn'><FiSearch className='text-white' /></button>
              </div>
            </div>
          </form>
          <div className="">
            <button className='new-booking-btn lg:flex md:flex sm:hidden hidden px-4 py-2 items-center gap-x-2 rounded-full shadow-md text-white'><AiOutlinePlus /> New Booking</button>
          </div>
        </div>
        <div className="flex gap-x-2 rounded-full p-1 shadow-md">
          <div className="flex items-center justify-center rounded-full">
            <button><Image src={"images/avatar.svg"} className='select-none' width={32} height={32} alt='avatar-image' /></button>
          </div>
          <div className="lg:flex md:flex sm:hidden hidden gap-x-2 items-center pe-2">
            <h1>Hello Lokesh!</h1>
            <Image src={"images/hello.svg"} className='select-none' width={14} height={14} alt='hello-image' />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar