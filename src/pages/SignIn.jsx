import React, { useState, useContext } from "react";
import { supabase } from "../supabase/ClientSupabase";
import { AuthLogin } from "../context/UserAuth";
import Overlay from "../components/Overlay";

const SignIn = () => {
  const {
    userSignUp,
    userSignIn,
    loading,
    setLoading,
    setErrorMessage,
    errorMessage,
    userData,
    setUserData,
    setIsRegistered,
    isRegistered,
  } = useContext(AuthLogin);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name?.value || "";
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    if (!isRegistered) {
      await userSignUp({ name, email, password });
    } else {
      await userSignIn({ email, password });
    }
    console.log("user created", userData);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form
        action=""
        className="w-80 h-80 flex flex-col items-center justify-center gap-5 bg-black text-white"
        onSubmit={handleForm}
      >
        <h1 className="font-bold tracking-wide">
          {isRegistered ? "Hello Again!" : "Sign up Today!"}
        </h1>
        {!isRegistered && (
          <input
            type="text"
            placeholder="name"
            name="name"
            className="outline-none border-b "
          />
        )}
        <input
          type="email"
          placeholder="email"
          name="email"
          className="outline-none border-b "
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="outline-none border-b"
        />
        <button
          className="bg-green-600 text-black px-6 py-1 rounded-sm font-bold active:scale-70 transition-all duration-400 hover:bg-green-500 "
          type="submit"
        >
          {isRegistered ? "Login" : "Sign Up"}
        </button>
        <button
          className="transition-all underline underline-offset-4 sm:hover:underline sm:no-underline  capitalize"
          type="button"
          onClick={() => setIsRegistered(!isRegistered)}
        >
          {isRegistered ? "Sign up for free!" : "Already have an account?"}
        </button>
      </form>

      {/* Loading Overlay  */}

      {loading && <Overlay />}
    </div>
  );
};

export default SignIn;
