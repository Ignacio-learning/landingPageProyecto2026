import './Modal.css';

const Modal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <img src={photo.url} alt={photo.title} className="modal-image" />
        <p className="modal-title">{photo.title}</p>
      </div>
    </div>
  );
};

export default Modal;
