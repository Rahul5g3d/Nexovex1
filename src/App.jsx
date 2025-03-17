import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer1";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import COM from "./Component/Pages/Challenges/ChallengeOfTheMonth";
import COM_Pwinner from "./Component/Pages/Challenges/COM_Pwinner";
import COM_Rules from "./Component/Pages/Challenges/COM_Rule";
import COM_participate from "./Component/Pages/Challenges/COM_participate";
import U_events from "./Component/Pages/Hackathon/U_events";
import P_events from "./Component/Pages/Hackathon/P_Events";
import H_Highlights from "./Component/Pages/Hackathon/H_highlight";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/COM" element={<COM />} />
        <Route path="/COM_Pwinner" element={<COM_Pwinner />} />
        <Route path="/COM_Rules" element={<COM_Rules />} />
        <Route path="/COM_participate" element={<COM_participate />} />
        <Route path="/U_events" element={<U_events />} />
        <Route path="/P_events" element={<P_events />} />
        <Route path="/H_Highlights" element={<H_Highlights />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
