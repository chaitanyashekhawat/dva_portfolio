import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="app-container">
      <Sidebar />
      <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
