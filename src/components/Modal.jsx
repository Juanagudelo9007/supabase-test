import React, { useContext } from "react";
import { Link } from "react-router";
import { createPortal } from "react-dom";
import { AuthLogin } from "../context/UserAuth";

const Modal = () => {
const {userOut} = useContext(AuthLogin)


  return createPortal(
    <div className="fixed -top-1 right-1  z-40">
      <div className="absolute right-0  top-14 w-46 h-32 flex flex-col  text-white text-[9px] gap-2  px-1 bg-[#3B3A3A]">
        <Link
          className="block w-full  py-1 transition-all duration-400 hover:bg-[#525151] "
          to={"/profile"}
        >
          Profile
        </Link>
        <Link
          className="block w-full  py-1 transition-all duration-400 hover:bg-[#525151] "
          to={"/support"}
        >
          Support
        </Link>
        <Link
          className="block w-full  py-1 transition-all duration-400 hover:bg-[#525151] "
          to={"/settings"}
        >
          Settings
        </Link>
        <button className="border-b border-t  border-l-none border-r-none border-[#525151] py-0.5 cursor-pointer transition-all duration-400 hover:bg-[#525151]"
        onClick={userOut}
        >
          Log Out
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
