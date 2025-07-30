import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

// 1. Import the REAL MacPage component we built
import StorePage from "./pages/StorePage/StorePage";
import IpadPage from "./pages/Ipadpage/IpadPage";
import IphonePage from "./pages/IphonePage/IphonePage";
import MacPage from "./pages/MacPage/MacPage";
import WatchPage from "./pages/WatchPage/WatchPage";
import VisionPage from "./pages/Vision/VisionPage";
import AirPodsPage from "./pages/AirpodsPage/AirpodsPage";
import TvHomePage from "./pages/TvHomePage/TvHomePage";
import EntertainmentPage from "./pages/EntertainmentPage/EntertainmentPage";
import AccessoriesPage from "./pages/AccessoriesPage/AccessoriesPage";
import SupportPage from "./pages/SupportPage/SupportPage";
// Placeholder Pages for other routes can remain for now


// ... create other simple pages as needed

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* 2. This route now renders the complete, imported MacPage */}
        <Route path="/store" element={<StorePage />} />
        <Route path="/mac" element={<MacPage />} />
        {/* Other routes still use their placeholders */}
        <Route path="/ipad" element={<IpadPage />} />
        <Route path="/iphone" element={<IphonePage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/airpods" element={<AirPodsPage />} />
        <Route path="/tv-home" element={<TvHomePage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/support" element={<SupportPage />} />

        {/* Add other routes here */}
      </Routes>
      {/* You can uncomment the Footer when you are ready to use it */}
      <Footer />
    </>
  );
}

export default App;
