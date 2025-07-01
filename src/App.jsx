import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

// 1. Import the REAL MacPage component we built
import MacPage from "./pages/MacPage/MacPage";
import VisionPage from "./pages/Vision/VisionPage";

// Placeholder Pages for other routes can remain for now
const StorePage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>Store</h1>
  </div>
);
const IpadPage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>iPad Page</h1>
  </div>
);
const IphonePage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>iPhone Page</h1>
  </div>
);
const WatchPage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>Watch Page</h1>
  </div>
);

const AirPodsPage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>AirPods Page</h1>
  </div>
);
const TvHomePage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>TV & Home Page</h1>
  </div>
);
const EntertainmentPage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>Enterainment Page</h1>
  </div>
);
const AccessoriesPage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>Accessories Page</h1>
  </div>
);
const SupportPage = () => (
  <div className="container text-center" style={{ paddingTop: "50px" }}>
    <h1>Support Page</h1>
  </div>
);

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
        <Route path="/tvhome" element={<TvHomePage />} />
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
