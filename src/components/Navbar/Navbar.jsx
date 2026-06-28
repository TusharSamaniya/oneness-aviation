import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
// Importing your logo image from the assets folder
import logo from "../../assets/logo .jpeg"; 

const NAV_ITEMS = [
  {
    label: "Flights",
    dropdown: [
      { label: "Private Charter", href: "#" },
      { label: "Ferry Flights", href: "#" },
      { label: "Helicopter Charter", href: "#" },
      { label: "Air Ambulance", href: "#" },
      { label: "Empty Leg Flights", href: "#", tag: "Coming Soon" },
      { label: "Flight Cost Estimator", href: "#" },
      { label: "Request a Charter", href: "#", highlight: true },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { label: "Wedding Charter", href: "#" },
      { label: "Film Shooting Charter", href: "#" },
      { label: "Election Flying", href: "#" },
      { label: "Sports Charter", href: "#" },
      { label: "Joy Ride", href: "#" },
      { label: "Aviation Consultancy", href: "#" },
      { label: "Corporate Travel", href: "#" },
    ],
  },
  {
    label: "Fleet",
    dropdown: [
      { label: "Light Jets", href: "#" },
      { label: "Midsize Jets", href: "#" },
      { label: "Heavy Jets", href: "#" },
      { label: "Ultra Long Range", href: "#" },
      { label: "Helicopters", href: "#" },
      { label: "Compare Aircraft", href: "#", highlight: true },
    ],
  },
  { label: "Membership", href: "#" },
  {
    label: "About",
    dropdown: [
      { label: "Company", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Mission & Vision", href: "#" },
      { label: "Why Choose Us", href: "#" },
      { label: "Certifications", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog", href: "#" },
      { label: "Aviation News", href: "#" },
      { label: "Travel Guides", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Charter Guide", href: "#" },
      { label: "Cancellation Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label) => {
    clearTimeout(timerRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav className="navbar" ref={navRef}>
      {/* Top bar */}
      <div className="navbar__topbar">
        <div className="navbar__topbar-inner">
          <a href="tel:+919990001234" className="navbar__contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 9990001234
          </a>
          <a href="mailto:charter@oneness.aero" className="navbar__contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            charter@oneness.aero
          </a>
          <span className="navbar__contact-item navbar__active-badge">
            <span className="navbar__pulse" />
            Active 24x7
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="navbar__main">
        {/* Updated Logo Section */}
        <a href="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <img 
              src={logo} 
              alt="Oneness Aviation Logo" 
              style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
            />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">ONENESS</span>
            <span className="navbar__logo-sub">AVIATION</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={`navbar__item ${item.dropdown ? "navbar__item--has-dropdown" : ""} ${activeDropdown === item.label ? "navbar__item--active" : ""}`}
              onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a href={item.href || "#"} className="navbar__link">
                {item.label}
                {item.dropdown && (
                  <svg className="navbar__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                )}
              </a>

              {item.dropdown && activeDropdown === item.label && (
                <div className="navbar__dropdown" onMouseEnter={() => handleMouseEnter(item.label)} onMouseLeave={handleMouseLeave}>
                  <ul className="navbar__dropdown-list">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label} className="navbar__dropdown-item">
                        <a href={sub.href} className={`navbar__dropdown-link ${sub.highlight ? "navbar__dropdown-link--highlight" : ""}`}>
                          {sub.label}
                          {sub.tag && <span className="navbar__tag">{sub.tag}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <span className={`navbar__hamburger-line ${mobileOpen ? "open" : ""}`} />
          <span className={`navbar__hamburger-line ${mobileOpen ? "open" : ""}`} />
          <span className={`navbar__hamburger-line ${mobileOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="navbar__mobile">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="navbar__mobile-item">
              <button
                className="navbar__mobile-link"
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
              >
                {item.label}
                {item.dropdown && (
                  <svg className={`navbar__chevron ${mobileExpanded === item.label ? "rotated" : ""}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                )}
              </button>
              {item.dropdown && mobileExpanded === item.label && (
                <ul className="navbar__mobile-dropdown">
                  {item.dropdown.map((sub) => (
                    <li key={sub.label}>
                      <a href={sub.href} className="navbar__mobile-sub">{sub.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}