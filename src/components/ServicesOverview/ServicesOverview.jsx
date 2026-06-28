import React from "react";
import "./ServicesOverview.css";

// Updated import: Using the general 'fa' package instead of 'fa6'
import { 
  FaPlaneDeparture, 
  FaGlobe, 
  FaBriefcaseMedical, 
  FaRing, 
  FaBullhorn, 
  FaTrophy, 
  FaVideo, 
  FaSmile 
} from "react-icons/fa";

const servicesData = [
  {
    title: "Private Charter",
    description: "Experience ultimate luxury and flexibility with our private jet charters.",
    icon: <FaPlaneDeparture />,
  },
  {
    title: "Ferry Flights",
    description: "Seamless and secure aircraft relocation across international borders.",
    icon: <FaGlobe />,
  },
  {
    title: "Air Ambulance",
    description: "Rapid, safe, and medically equipped flights for critical emergencies.",
    icon: <FaBriefcaseMedical />,
  },
  {
    title: "Wedding Charter",
    description: "Make your grand entrance unforgettable with our exclusive wedding charters.",
    icon: <FaRing />,
  },
  {
    title: "Election Flying",
    description: "Efficient and discreet travel solutions for political campaigns.",
    icon: <FaBullhorn />,
  },
  {
    title: "Sports Charter",
    description: "Tailored travel for sports teams, ensuring rest and readiness.",
    icon: <FaTrophy />,
  },
  {
    title: "Film Charter",
    description: "Transporting cast, crew, and equipment securely to any location.",
    icon: <FaVideo />,
  },
  {
    title: "Joy Ride",
    description: "Breathtaking aerial tours and sightseeing for special occasions.",
    icon: <FaSmile />,
  }
];

const ServicesOverview = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Premium Services</h2>
        <p className="services-subtitle">Tailored aviation solutions for every requirement</p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <a href="#" className="service-link">Learn more &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;