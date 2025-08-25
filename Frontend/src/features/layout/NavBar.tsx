import React from "react";
import { Search } from "lucide-react";
import { Notification02Icon } from "hugeicons-react";
import meProfile from "../Assets/me.jpeg";
import {useStore} from "../../store/store"

const NavBar: React.FC = () => {
  const store = useStore()
  return (
    <nav className="flex items-center justify-between text-white w-full h-14 px-4 max-lg:hidden mt-5 mb-4">
      <div className="w-1/3" />
      <div className="flex justify-center w-1/3 -ml-25 max-sm:w-full max-sm:ml-0 m-3 mt-6 mb-6">
        {/* <div className="flex items-center bg-[#393E46] px-3 py-3 rounded-2xl w-[500px]">
          <Search className="w-5 h-5 text-amber-50 mr-3" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow bg-transparent text-white placeholder-blue-200 outline-none h-7 max-sm:w-full"
          />
        </div> */}
      </div>
      <div className="flex items-center gap-6 w-1/3 justify-end">
        <Notification02Icon className="size-8 hover:text-[#00ADB5] cursor-pointer max-sm:hidden" />
        <img
          src={store.image_url}
          className="size-12 rounded-full hover:text-[#00ADB5] cursor-pointer max-sm:hidden"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default NavBar;
