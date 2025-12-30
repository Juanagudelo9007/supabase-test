import React from "react";

const Overlay = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col gap-6 items-center justify-center  ">
      <div className="h-18 w-18 border-8 border-green-600 border-b-transparent animate-spin rounded-full"></div>
      <h1 className="text-xl tracking-wide capitalize text-white">
        Loading...
      </h1>
    </div>
  );
};

export default Overlay;
