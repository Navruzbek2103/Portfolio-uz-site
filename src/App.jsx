import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <>
      <Header />

        <Routes>
            <Route path=''/>
        </Routes>

      <Footer />
    </>
  );
};

export default App;
