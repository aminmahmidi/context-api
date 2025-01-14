import { useContext, useState } from "react";
import "./App.css";
import { MyContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
function App() {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
