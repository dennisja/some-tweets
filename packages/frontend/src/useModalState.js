import { useState } from 'react';

function useModalState(initialState = false) {
  const { 0: modalIsOpen, 1: setModalIsOpen } = useState(initialState);

  function closeModal() {
    setModalIsOpen(false);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  return {
    closeModal,
    openModal,
    modalIsOpen,
  };
}

export default useModalState;
