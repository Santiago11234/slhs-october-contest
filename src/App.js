import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CompetitorPage from "./Pages/CompetitorPage";
import LoginPage from "./Pages/loginPage";
import AdminPage from "./Pages/adminPage";

import "./App.css"; 


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  function handleLogin ( password) {
    if(password === "admin") {
      setIsLoggedIn(2);
      return;
    }
    setIsLoggedIn(1);
    console.log(isLoggedIn)
    console.log("home")
  };

  
  return (
    <Router basename="/">
        <Routes>
          {isLoggedIn === 1 ? (
            <Route
              path=""
              element={
                <CompetitorPage />
              }
            />
          ) : isLoggedIn === 0 ? (
            <Route path="" element={<LoginPage goToHomeFunction={handleLogin}/>} />
          ) :
          (
            <Route path="" element={<AdminPage />} />
          )
        }
         
        </Routes>
    </Router>
  );
}

export default App;
