import { useState } from "react";
import Modal from "./Modal";
import './PortfolioItem.css';

export default function PortfolioItem({ imgSrc, description, heading, footerHtml, details }) {
    const [hovered, setHovered] = useState(false);
    const [showModal, setShowModal] = useState(false);
 
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const handleClick = () => openModal();

    return (
        <div
            className="portfolio-item"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={imgSrc} alt="Project screenshot" />
            {hovered && (
                <div className="overlay">
                    <h3 dangerouslySetInnerHTML={{ __html: heading }}></h3>
                    <p className="overlay-text" dangerouslySetInnerHTML={{ __html: description }}></p>
                    <p className="overlay-more" onClick={handleClick}>click for details</p>
                    <div className="footer" dangerouslySetInnerHTML={{ __html: footerHtml }}></div>
                </div>
            )}
            <Modal onClose={closeModal} isOpen={showModal} content={details} id={`modal-${heading}`} />
        </div>
    );
}