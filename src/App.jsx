import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';

// 1. Import the REAL MacPage component we built
import MacPage from './pages/MacPage/MacPage';

// Placeholder Pages for other routes can remain for now
const IpadPage = () => <div className="container text-center" style={{paddingTop: '50px'}}><h1>iPad Page</h1></div>;
const IphonePage = () => <div className="container text-center" style={{paddingTop: '50px'}}><h1>iPhone Page</h1></div>;
// ... create other simple pages as needed

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* 2. This route now renders the complete, imported MacPage */}
        <Route path="/mac" element={<MacPage />} />

        {/* Other routes still use their placeholders */}
        <Route path="/ipad" element={<IpadPage />} />
        <Route path="/iphone" element={<IphonePage />} />
        
        {/* Add other routes here */}
      </Routes>
      {/* You can uncomment the Footer when you are ready to use it */}
      <Footer />
    </>
  );
}

export default App;