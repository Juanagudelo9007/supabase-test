import React, { useState } from "react";
import { supabase } from "../supabase/ClientSupabase";

const SignIn = () => {
  const [registered, setRegistered] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name?.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    try {
      if (!registered) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } },
        });
        if (error) {
          console.log(error.message);
          setLoading(false);
          return;
        }

        const { data: dbData, error: dbError } = await supabase
          .from("users")
          .insert([{ auth_id: data.user.id, name, email }]);

        if (dbError) {
          console.log(dbError.message);
          setLoading(false);
          return;
        }

        console.log("User name:", data.user.user_metadata.name);
        console.log("User created in Auth:", data.user);

        setUserData(data.user);
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        setUserData(data.user);
      }
    } catch (er) {
      setErr(err.message);
      console.log(er);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form
        action=""
        className="w-80 h-80 flex flex-col items-center justify-center gap-5 bg-black text-white"
        onSubmit={handleForm}
      >
        <h1 className="font-bold tracking-wide">
          {registered ? "Login" : "Sign up Today!"}
        </h1>
        {!registered && (
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
          {registered ? "Login" : "Sign Up"}
        </button>
        <button
          className="transition-all underline underline-offset-4 sm:hover:underline sm:no-underline  capitalize"
          type="button"
          onClick={() => setRegistered(!registered)}
        >
          {registered ? "Sign up for free!" : "Already have an account?"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
