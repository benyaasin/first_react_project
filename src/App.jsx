// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Navibar from "./sections/Navbar";
import "./App.css";
import Footer from "./sections/Footer";
import MyCard from "./components/MyCard"; 
import Features from "./sections/Features";
import Headerx from "./sections/Headerx";

function App() {
  return (
    <>
      <Navibar />
      <Headerx/>
      <Footer />
      <Features/>
      <MyCard />
      
    </>
  );
}

export default App;
