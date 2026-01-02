import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center bg-[#3B3A3A] rounded-full overflow-hidden transition-all duration-500 text-white ${
        open ? "w-48" : "w-8"
      }`}
    >
      <button
        className="p-2 cursor-pointer flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <CiSearch />
      </button>
      <input
        type="text"
        placeholder="search a song"
        className={`bg-transparent outline-none   transition-all duration-300 ${
          open ? "w-full opacity-100" : "opacity-0 w-0"
        }`}
      />
    </div>
  );
};

export default InputSearch;
