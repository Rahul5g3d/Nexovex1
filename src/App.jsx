import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import ChallengeOfTheMonth from "./Component/Pages/ChallengeOfTheMonth";
import PreviousChallenges from "./Component/Pages/PreviousChallenges";
import SEO from "./Component/Pages/SEO";
import SMM from "./Component/Pages/SMM";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/challenge-of-the-month"
          element={<ChallengeOfTheMonth />}
        />
        <Route
          path="/pages/challenges/p-challenge"
          element={<PreviousChallenges />}
        />
        <Route path="/seo" element={<SEO />} />
        <Route path="/smm" element={<SMM />} />
      </Routes>
    </Router>
  );
}

export default App;
