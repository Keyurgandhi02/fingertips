import React, { useState } from "react";
import { Provider } from "react-redux";
import { MyContext } from "../MyContext";
import store from "../store";
import About from "./About";
import GlobalInput from "./GlobalInput";

function Home() {


  return (
    <>
      <About />
      <GlobalInput />
    </>
  );
}

export default Home;
