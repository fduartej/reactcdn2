// components/Modal.js
function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Demo</h2>
        <p>Este es un mensaje de demostración dentro del modal.</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

// Define globally
window.Modal = Modal;
