const modalBtns = document.querySelectorAll('.modal-open');
const modals = document.querySelectorAll('.modal');
const modalCloses = document.querySelectorAll('.modal-close');

const modalShow = (e) => {
  const target = e.target;
  const modalId = document.getElementById(target.dataset.modal);
  modalId.classList.add('modal--active');
};

const modalClose = () => {
  modals.forEach(modal => {
    modal.classList.remove('modal--active');
  });
};


modalBtns.forEach((btn) => {
  btn.addEventListener('click', modalShow);
});

modalCloses.forEach(item => {
  item.addEventListener('click', modalClose);
});
