import React, { useEffect, useState } from "react";
import { AuthLogin } from "../context/UserAuth";
import { useContext } from "react";


const Home = () => {
  const { userData } = useContext(AuthLogin);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const greetings = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(greetings);
  }, []);

  return (
    <div className="relative  w-full h-screen bg-black flex">
      {showMessage && (
        <h1 className="absolute top-6 right-[35%] text-3xl font-bold  capitalize text-transparent bg-clip-text bg-linear-to-t from-black/30 via-green-500 to-green-700 sm:hover:text-blue-400 ">
          Hi, {userData?.user_metadata?.name}
        </h1>
      )}
   
       
    </div>
  );
};

export default Home;
