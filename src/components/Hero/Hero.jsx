import React, { useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState('Private Jet');

  return (
    <section className="hero">
      <div className="hero__overlay" />
      
      <div className="hero__content">
        <h1 className="hero__title">Fly Smart, Fly Better, Fly Oneness</h1>
        <p className="hero__subtitle">Elevating Every Journey — Private Jet Charter Solutions for Business</p>

        <div className="hero__search-box">
          <div className="hero__tabs">
            {['Private Jet', 'Ferry Flight', 'Private Charter'].map((tab) => (
              <button 
                key={tab}
                className={`tab ${selectedTab === tab ? 'active' : ''}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="hero__search-inputs">
            <input className="input-field" type="text" placeholder="Departure" />
            <input className="input-field" type="text" placeholder="Arrival" />
            <input className="input-field" type="number" placeholder="Pax" />
            <input className="input-field" type="datetime-local" />
          </div>
          
          <button className="search-btn">Search {selectedTab}</button>
        </div>
      </div>
    </section>
  );
}