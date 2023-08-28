import './Modal.css';

export default function Modal({ isOpen, onClose, content }){
    
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close-button" onClick={onClose}>&times;</span>
            <div className="modal-body" dangerouslySetInnerHTML={{ __html: content }}>
            </div>
          </div>
        </div>
      );
}