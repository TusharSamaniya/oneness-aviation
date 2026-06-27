import { useState } from "react";
import "./Hero.css";

const CHARTER_TABS = ["Jet Charter", "Helicopter", "Ferry"];
const TRIP_TYPES = ["One way", "Round trip", "Multi city"];

// Icon components
const PlaneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 4s-2 1-3.5 2.5L12 10 4.8 8.2l-1.4 1.4L10 13l-2 3-4 1 1 1 4-1 3-2 4 6.6 1.4-1.4z"/>
  </svg>
);

const HelicopterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h5l3 7 4-14 2 7h4"/>
    <path d="M7 5h10M12 5v3"/>
  </svg>
);

const FerryIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20M6 16l1-7h10l1 7M12 4v5M8 9h8"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
);

const UsersIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
);

const LocationIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const TAB_ICONS = { "Jet Charter": <PlaneIcon />, Helicopter: <HelicopterIcon />, Ferry: <FerryIcon /> };

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Jet Charter");
  const [tripType, setTripType] = useState("One way");
  const [departure, setDeparture] = useState("Delhi, DEL");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [pax, setPax] = useState(2);

  return (
    <section className="hero">
      {/* Background layers */}
      <div className="hero__bg" />
      <div className="hero__overlay" />
      <div className="hero__gradient-left" />

      <div className="hero__inner">
        {/* LEFT: copy */}
        <div className="hero__copy">
          <p className="hero__eyebrow">India's Premier. Fly Better. Fly Oneness.</p>

          <h1 className="hero__headline">
            <span className="hero__headline-white">ELEVATING</span>
            <br />
            <span className="hero__headline-gold">EVERY JOURNEY</span>
          </h1>

          <p className="hero__sub">
            Private Jet Charter Solutions<br />
            for Business &amp; Leisure
          </p>

          <div className="hero__ctas">
            <a href="#enquiry" className="hero__btn hero__btn--primary">Secure Enquiry AM</a>
            <a href="#trust" className="hero__btn hero__btn--secondary">Trust Pillars</a>
          </div>

          <div className="hero__badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF82" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Secure enquiry from trusted operators</span>
          </div>
        </div>

        {/* RIGHT: search widget */}
        <div className="hero__widget">
          <div className="hero__widget-header">
            <span className="hero__widget-label">CHARTER SEARCH</span>
          </div>

          {/* Tabs */}
          <div className="hero__tabs">
            {CHARTER_TABS.map((tab) => (
              <button
                key={tab}
                className={`hero__tab ${activeTab === tab ? "hero__tab--active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {TAB_ICONS[tab]}
                {tab}
              </button>
            ))}
          </div>

          {/* Trip type radios */}
          <div className="hero__trip-types">
            {TRIP_TYPES.map((type) => (
              <label key={type} className="hero__radio-label">
                <input
                  type="radio"
                  name="tripType"
                  className="hero__radio"
                  checked={tripType === type}
                  onChange={() => setTripType(type)}
                />
                <span className="hero__radio-custom" />
                {type}
              </label>
            ))}
          </div>

          {/* Form grid */}
          <div className="hero__form-grid">
            {/* Departure */}
            <div className="hero__field">
              <label className="hero__field-label">DEPARTURE</label>
              <div className="hero__field-inner">
                <LocationIcon />
                <input
                  className="hero__input"
                  type="text"
                  placeholder="Select city..."
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
              </div>
            </div>

            {/* Arrival */}
            <div className="hero__field">
              <label className="hero__field-label">ARRIVAL</label>
              <div className="hero__field-inner">
                <LocationIcon />
                <input
                  className="hero__input"
                  type="text"
                  placeholder="Select city..."
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                />
              </div>
            </div>

            {/* Date */}
            <div className="hero__field">
              <label className="hero__field-label">DEPARTURE DATE</label>
              <div className="hero__field-inner">
                <CalendarIcon />
                <input
                  className="hero__input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Select date..."
                />
              </div>
            </div>

            {/* Passengers */}
            <div className="hero__field">
              <label className="hero__field-label">PASSENGERS</label>
              <div className="hero__field-inner hero__field-inner--pax">
                <UsersIcon />
                <div className="hero__pax-controls">
                  <button className="hero__pax-btn" onClick={() => setPax(Math.max(1, pax - 1))}>−</button>
                  <span className="hero__pax-value">{pax} Pax</span>
                  <button className="hero__pax-btn" onClick={() => setPax(pax + 1)}>+</button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button className="hero__search-btn">
            SELECT CHARTER
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
