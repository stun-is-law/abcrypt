import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import About from "../pages/About";
import Security from "../pages/Security";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/abcrypt" element={<Main />}></Route>
          <Route path="/abcrypt/about" element={<About />}></Route>
          <Route path="/abcrypt/security" element={<Security />}></Route>
          <Route path="/abcrypt/contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
