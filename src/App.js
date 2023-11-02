import React from 'react';
import Navbar from './Navbar';
import MainText from './MainText';
import BodyPage from './BodyPage';
import './style.css';



export default function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <MainText />
        <BodyPage />
      </div>
    </>
  );
}

