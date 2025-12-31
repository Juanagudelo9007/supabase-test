import React from 'react'; 
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';

const SearchInput = () => {
const  [open, setOpen] = useState(false)

  return (
    <div className=" w-52 flex h-10 items-center justify-center bg-red-600">
      <button
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <CiSearch />
      </button>
      <input
        type="text"
        className={`bg-gray-600 rounded-full p-1 w-8 absolute left-1 ${
          open ? "w-full opacity-100 text-xs indent-6" : "w-8 opacity-0"
        } md:w-full md:indent-6 md:text-[10px]  md:block cursor-pointer outline-white outline-0.5 transition-all duration-400`}
        placeholder="what do you want to play?"
      />
    </div>
  );
}

export default SearchInput

