import { useContext, useState } from "react";
import "./App.css";
import { MyContext } from "./context/ThemeContext";

function App() {
  const { state, setState } = useContext(MyContext);
  console.log(state);
  return (
    <>
      <h2>theme</h2>
    </>
  );
}

export default App;
