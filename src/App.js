import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import Header from './components/Header.tsx';
import MainPage from './components/MainPage.tsx';
import Accessibility from './components/Accessibility.tsx';
import Terms from './components/Terms.tsx';
import AboutPage from './components/AboutPage.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './components/PrivacyPolicy.tsx';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App: React.FC = () => {

  return (
    <Router>
    <div className="app">
      <div className="content">
        <CssBaseline />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/accessibility" element={<Accessibility/>} />
        </Routes>
        <Footer />
      </div>
    </div>
    </Router>
  );
};

export default App;
