import React from "react";
import { Link } from "react-router";
import { AuthLogin } from "../context/UserAuth";
import { useContext } from "react";
import { MdHomeFilled } from "react-icons/md";
import SearchInput from "./SearchInput";
import InputSearch from "./InputSearch";


const Navbar = () => {
  const { userOut, userData } = useContext(AuthLogin);

  return (
    <div className="relative w-full h-14 flex items-center justify-center">
      <button className="absolute right-2 bg-orange-500 rounded-full px-2 border-8 border-zinc-700 capitalize text-black text-xl font-bold">
        {userData?.user_metadata?.name.charAt(0)}
      </button>
      <div className=" w-full flex items-center justify-center">
        <Link>
          <MdHomeFilled size={20} />
        </Link>
        <InputSearch />
      </div>
    </div>
  );
};

export default Navbar;
