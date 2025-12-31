import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const InputSearch = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex items-center bg-amber-300 rounded-full overflow-hidden transition-all duration-500 ${
        open ? "w-64" : "w-8"
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
        placeholder="what do you want to play?"
        className={`bg-transparent outline-none   transition-all duration-300 ${
          open ? "w-full opacity-100" : "opacity-0 w-0"
        }`}
      />
    </div>
  );
};

export default InputSearch;
