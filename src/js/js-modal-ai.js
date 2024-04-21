(() => {
  const refs = {
    openModalBtn1: document.querySelectorAll("[data-modal-open-one]"),
    closeModalBtn1: document.querySelector("[data-modal-close1]"),
    modal1: document.querySelector("[data-modal1]"),
  };

  refs.openModalBtn1.forEach((item) =>
    item.addEventListener("click", toggleModal1)
  );

  refs.closeModalBtn1.addEventListener("click", toggleModal1);

  function toggleModal1() {
    refs.modal1.classList.toggle("is-hidden");
  }
})();
