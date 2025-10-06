import React, { useState } from "react";
import LiftCalculator from "./pages/LiftCalculator";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import TemperatureConverter from "./pages/TemperatureConverter";

export default function App() {
  const [page, setPage] = useState("lift");

  return (
    <>
      {page === "lift" && <LiftCalculator goToTemp={() => setPage("temp")} />}
      {page === "temp" && <TemperatureConverter goToLogin={() => setPage("login")} />}
      {page === "login" && <Login goToProfile={() => setPage("profile")} />}
      {page === "profile" && <Profile />}  
    </>
  );
}

