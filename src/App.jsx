import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import AllCards from "./pages/AllCards"


const App = () => {
  return (
    <>
      <Header />

        <Routes>
            <Route path='/' element={<Home/>}/>
        <Route path='/allCards' element={<AllCards />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>

      <Footer />
    </>
  );
};

export default App;
