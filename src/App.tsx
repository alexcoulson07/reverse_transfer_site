import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/general/Header";
import Footer from "./components/general/Footer";
import HomePage from "./components/pages/home/HomePage";
import AboutPage from "./components/pages/about/AboutPage";
import DisclaimerPage from "./components/pages/disclaimer/DisclaimerPage";
import CoursesPage from "./components/pages/courses/CoursesPage";
import SectionsPage from "./components/pages/sections/SectionsPage";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen min-w-screen text-main-font bg-white font-sans">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/sections" element={<SectionsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
