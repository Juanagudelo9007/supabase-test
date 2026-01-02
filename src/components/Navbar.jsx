import React, { useState } from "react";
import { Link } from "react-router";
import { AuthLogin } from "../context/UserAuth";
import { useContext } from "react";
import { MdHomeFilled } from "react-icons/md";
import InputSearch from "./InputSearch";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Modal from "./Modal";



const Navbar = () => {
  const { userData,openModal, setOpenModal  } = useContext(AuthLogin);
 

  return (
    <div className="relative w-full h-14 flex items-center justify-center bg-black text-white p-2">
      <div className="flex gap-4 w-12 h-8 items-center">
        <span className=" cursor-pointer">
          <GrPrevious size={14}/>
        </span>
        <span className="cursor-pointer">
          <GrNext size={14}/>
        </span>
      </div>
      <button className="absolute right-2 bg-orange-500 rounded-full px-2 border-6 border-zinc-700 capitalize text-black text-xl font-bold transition-all duration-700 cursor-pointer"
      onClick={()=> setOpenModal(!openModal)}
      >
        {userData?.user_metadata?.name.charAt(0)}
      </button>
      <div className=" w-full flex items-center justify-center gap-4">
        <Link className="text-white bg-[#3B3A3A] p-1.5 rounded-full transition-all duration-500 hover:bg-[#525151] hover:scale-105"
        to={"/home"}
        >
          <MdHomeFilled size={20} />
        </Link>
        <InputSearch />
      </div>
     

    </div>
  );
};

export default Navbar;
