import React from "react";
import SignIn from "./pages/SignIn";
import AppRouter from "./routes/AppRouter";
import { AuthLogin } from "./context/UserAuth";
import { useContext } from "react";

const App = () => {
  const { userData } = useContext(AuthLogin);

   return <>{!userData ? <SignIn /> : <AppRouter />}
        
  </>;
};

export default App;
