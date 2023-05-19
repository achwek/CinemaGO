import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function DeleteModal({ onDelete , title}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  const handleDelete = () => {
    onDelete();
    console.log(" deleted");
    
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <button
          className="profile__action profile__action--delete open-modal"
          type="button"
          onClick={() => setModalIsOpen(true)}
        >
          <i className="icon ion-ios-trash"></i>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="zoom-anim-dialog modal"
      >
        <h6 className="modal__title">Delete {title}</h6>
        <p className="modal__text">
          Are you sure you want to permanently delete this {title}?
        </p>

        <div className="modal__btns">
          <button
            className="modal__btn modal__btn--apply"
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="modal__btn modal__btn--dismiss"
            type="button"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default DeleteModal;
