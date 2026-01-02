import React from "react";
import { createContext, useState, useEffect } from "react";
import { supabase } from "../supabase/ClientSupabase";

export const AuthLogin = createContext();

const UserAuth = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
   const [openModal, setOpenModal] = useState(false);
    

  {
    /*Function to signup */
  }

  const userSignUp = async ({ name, email, password }) => {
    setLoading(true);
    try {
      if (!isRegistered) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { name } },
        });
        if (error) {
          console.log(error.message);
          setErrorMessage("please try again");
          setLoading(false);
          return;
        }
        const { data: dbData, error: dbError } = await supabase
          .from("users")
          .insert([{ auth_id: data.user.id, name, email }]);
        if (dbError) {
          console.log(dbError.message);
          setErrorMessage("Something went wrong, please try again");
          setLoading(false);
          return;
        }
        console.log("User name:", data.user.user_metadata.name);
        console.log("test", dbData);
        setUserData(data.user);
      }
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  {
    /* Function to signIn */
  }

  const userSignIn = async ({ email, password }) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.log(error.message);
        setErrorMessage("error please try again");
        setLoading(false);
      }

      setUserData(data.user);
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Error while login, please try again");
    }
  };

  {
    /* UseEffect to persist user session */
  }

  useEffect(() => {
    const getSesion = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setUserData(data.session?.user ?? null);
      } catch (error) {
        setUserData(null);
      }
    };

    getSesion();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserData(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  {
    /* Function to SignOut */
  }

  const userOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error.message);
      setErrorMessage("error while signing Out");
    }
    setLoading(false);
  };

  return (
    <AuthLogin.Provider
      value={{
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
        userOut,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </AuthLogin.Provider>
  );
};

export default UserAuth;
