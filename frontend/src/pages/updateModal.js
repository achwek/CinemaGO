import React, { useState }from "react";
import Modal from "react-modal";
import CinemaSelect from "./cinemaSelect"
Modal.setAppElement("#root");

function UpdateModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cinema, setCinema] = useState("");
  const [date, setDate] = useState("");
  const [timestart, setTimeStart] = useState("");
  const [timeend, setTimeEnd] = useState("");

  const handleUpdate = () => {
    // Placeholder function for updating projection
    console.log("Projection updated");
    setModalIsOpen(false);
  };

  return (
    <>
      <div>
        <button
          className="profile__action profile__action--update"
          type="button"
          onClick={() => setModalIsOpen(true)}
        >
          <i className="icon ion-md-create"></i>
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="zoom-anim-dialog modal"
      >
        <h6 className="modal__title">Update Projection</h6>
        <div className="modal__form">
        <div className="row row--form">
									
									<div className="col-12 col-lg-12">
									<form action="#" className="form form--profile">
								<div className="row row--form">
									<div className="col-12  col-lg-12">
									<CinemaSelect/>
									</div>
									<div className="col-12 col-sm-6 col-lg-12">
										<input type="date" className="form__input" placeholder="Date " />
									</div>
									<div className="col-12 col-6 col-lg-12 ">
										<input type="time" className="form__input" placeholder="Time Start" name="timestart" />
									</div>

									<div className="col-12 col-sm-6 col-lg-12">
										<input type="time" className="form__input" placeholder="Time End" name="timeend"  />
									</div>
									
                                    </div>
                                    </form>
                                    </div>
        </div>
        </div>

        <div className="modal__btns">
          <button
            className="modal__btn modal__btn--apply"
            type="button"
            onClick={handleUpdate}
          >
            Update
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

export default UpdateModal;