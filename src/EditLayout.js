import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 20,
    width: '40%',
    height: '40%',
  },
};

Modal.defaultStyles.overlay = {
  ...Modal.defaultStyles.overlay,
  backgroundColor: `rgba(0, 0, 0, 0.4)`,
  zIndex: 19,
};

Modal.setAppElement('#root');
function EditLayoutModal({ isOpen, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      arai={{ labelledby: 'edit-header' }}
    >
      <header>
        <h2 id="edit-header">Edit Settings</h2>
      </header>
      Modal Settings Should Go Here
    </Modal>
  );
}

export default EditLayoutModal;
