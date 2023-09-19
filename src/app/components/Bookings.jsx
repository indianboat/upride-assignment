"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import CustomRadioButton from './CustomRadioButton';
import toast, { Toaster } from 'react-hot-toast';

const Bookings = () => {

  const [loading, setLoading] = useState(false);
  const [offlineBookings, setOfflineBookings] = useState([]);
  const [onlineBookings, setOnlineBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(15);
  let totalBookings = [];

  //Fetch API Data
  useEffect(() => {
    setLoading(true);
    async function getBookings() {
      try {
        const res = await fetch('https://upride-internships-default-rtdb.firebaseio.com/.json');
        const allbookings = await res.json();
        setOfflineBookings(Object.values(allbookings.offline_bookings));
        setOnlineBookings(Object.values(allbookings.online_bookings));
        setLoading(false);
      } catch (error) {
        toast.error(error)
      }

    }
    getBookings();
  }, []);

  const [selectedOption, setSelectedOption] = useState('active');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function filterBookings(status) {
    totalBookings = offlineBookings.concat(onlineBookings).filter((val) => {
      if (val.bookingStatus === status) { return val }
    });
  }

  // Reset current page when status changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedOption]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPage])


  if (selectedOption == "active") { filterBookings("SUCCESS") }
  if (selectedOption == "completed") { filterBookings("COMPLETED") }
  if (selectedOption == "cancelled") { filterBookings("CANCELLED") }

  // Sorting accorind to booking time
  totalBookings.sort((a, b) => b.bookingEpochTime - a.bookingEpochTime);

  // Pagination
  const totalPages = Math.ceil(totalBookings.length / bookingsPerPage);
  const startIndex = (currentPage - 1) * bookingsPerPage;
  const endIndex = startIndex + bookingsPerPage;
  const displayedBookings = totalBookings.slice(startIndex, endIndex);


  return (
    <>
      <Toaster />
      {
        loading ? <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white/50 dark:bg-neutral-700/50 z-50">
          <div className="border-t-4 border-[#EC6C9B] dark:border-orange-500 border-solid rounded-full animate-spin h-16 w-16"></div>
        </div> : null
      }
      <div className="border flex flex-col mt-6 px-6">
        <div className="flex items-center">
          <h1 className='text-xl font-bold'>View Bookings</h1>
          <Image src={"images/art-board.svg"} width={50} height={50} alt='art-board' />
        </div>

        <div className="flex mt-6">
          <CustomRadioButton values={["active", "completed", "cancelled"]} onChange={handleOptionChange} selectedOption={selectedOption} />
        </div>

        <div className="my-4 overflow-auto">
          {
            totalBookings.length <= 0 ? "No data found" :
              <>
                <table className='min-w-full bg-white shadow'>
                  <thead>
                    <tr className='text-center bg-[#D9D9D94D]'>
                      <th className='py-2 px-4 text-center'>Name</th>
                      <th className='py-2 px-4 text-center'>Date</th>
                      <th className='py-2 px-4 text-center'>Package Details</th>
                      <th className='py-2 px-4 text-center'>Payment Mode</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      displayedBookings.map((booking, index) => {
                        return (
                          <tr className='text-center w-full p-4' key={index}>
                            <td className='p-5 flex items-center justify-center gap-x-3'>
                              <Image src={'images/peep.svg'} width={30} height={30} alt='peeps' />
                              <span className='text-[#242E42] font-medium'>{booking.userName}</span>
                            </td>
                            <td className='p-5 '>{new Date(booking.bookingEpochTime).toDateString()}</td>
                            <td className='p-5 text-[#242E42]'>{booking.packageTitle}</td>
                            <td className='p-5'>
                              <p className={`${booking.offlineBooking ? "bg-[#35DBA2]" : "bg-[#FFCA28]"} text-white rounded-full px-3 py-1 w-[160px]`}>{booking.offlineBooking == true ? "Online Payment" : "Offline Payment"}</p>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </>
          }

          {/* Pagination button */}
          {totalBookings.length <= 0 ? null : <h1 className='mt-8'>Page</h1>}
          <div className='flex flex-row gap-4 flex-wrap mt-2'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button key={index} className={`${currentPage === index + 1 ? "bg-slate-400" : "bg-slate-200"}  hover:bg-slate-400 px-3 rounded-full py-1 border`} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
            ))}
          </div>

        </div>
      </div >
    </>
  )
}

export default Bookings