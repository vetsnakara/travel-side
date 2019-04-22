import $ from "jquery";

class Modal {
  constructor() {
    this.modal = $(".modal");
    this.openModalBtn = $(".open-modal");
    this.closeModalBtn = $(".modal__close");

    this.bindEvents();
  }

  openModal = e => {
    e.preventDefault();
    this.modal.addClass("modal--is-revealed");
  };

  closeModal = e => {
    e.preventDefault();
    this.modal.removeClass("modal--is-revealed");
  };

  keyPressHandler = e => {
    if (e.keyCode === 27) this.closeModalBtn.click();
  };

  bindEvents = () => {
    this.openModalBtn.click(this.openModal);
    this.closeModalBtn.click(this.closeModal);

    $(document).keyup(this.keyPressHandler);
  };
}

export default Modal;
