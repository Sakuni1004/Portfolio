import React, { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prev) => !prev); // ✅ Fixed state update issue
  };

  return (
    <div className="portfolio-item">
      <div className="portfolio">
        <div className="portfolio-title">{title}</div>
        <img src={img} alt={title} className="portfolio-img" />
        <div className="portfolio-hover" onClick={toggleModal}></div>
      </div>

      {modal && (
        <div className="portfolio-modal active" onClick={toggleModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={Close} alt="Close" className="modal-close" onClick={toggleModal} />
            <h3 className="modal-title">{title}</h3>
            <ul className="modal-list-grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal-item" key={index}>
                  <span className="item-icon">{icon}</span>
                  <div>
                    <span className="item-title">{title}</span>
                    <span className="item-details">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <img src={img} alt={title} className="modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;

