import React from 'react';
import { Link } from 'react-router';
import { AuthLogin } from '../context/UserAuth';
import { useContext } from 'react';

const Navbar = () => {
const {userOut} = useContext(AuthLogin)

  return (
    <div className="min-screen w-full">
      <div className="w-full flex h-12 p-2 justify-center items-center gap-5 bg-black text-white">
        <Link to={"/home"}>Home</Link>
        <Link to={"/myspace"}>My Space</Link>
        <button
          className="bg-green-500 px-4 py-0.5 rounded-md  active:scale-70 transition-all duration-400"
          onClick={userOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Navbar
