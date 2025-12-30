import React from "react";
import { Link } from "react-router";
import { AuthLogin } from "../context/UserAuth";
import { useContext } from "react";

const Navbar = () => {
  const { userOut, userData } = useContext(AuthLogin);

  return (
    <div className="min-screen w-full">
      <div className="relative w-full flex h-12 p-2 justify-center items-center gap-5 bg-black/80 text-white">
        <h1 className="absolute left-3 capitalize text-green-400">
          {userData?.user_metadata?.name}
        </h1>
        <Link to={"/home"}>Home</Link>
        <Link to={"/myspace"}>My Space</Link>

        <button
          className="absolute right-3 bg-green-500 px-4 py-0.5 rounded-md  active:scale-70 transition-all duration-400"
          onClick={userOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
