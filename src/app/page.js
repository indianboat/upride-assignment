import Bookings from "./components/Bookings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex flex-row items-start ">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          <Bookings/>
        </div>
      </div>

    </>
  )
}
