import logo from "./logo.svg";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
