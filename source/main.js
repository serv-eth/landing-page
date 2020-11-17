const btnOpenMenu = document.querySelector('#btnOpenMenu');
const btnCloseMenu = document.querySelector('#btnCloseMenu');
const headerContainer = document.querySelector('.header__container');

const modalDetailFirst = document.querySelector('#modalDetailFirst');
const modalDetailSecond = document.querySelector('#modalDetailSecond');
const modalDetailThird = document.querySelector('#modalDetailThird');
const btnDetailFirst = document.querySelector('#btnDetailFirst');
const btnDetailSecond = document.querySelector('#btnDetailSecond');
const btnDetailThird = document.querySelector('#btnDetailThird');
const modalBlock = document.querySelectorAll('.details__modal');

btnOpenMenu.addEventListener('click', onBtnOpenMenu);
btnCloseMenu.addEventListener('click', onBtnCloseMenu);
headerContainer.addEventListener('click', onBtnCloseMenu);

btnDetailFirst.addEventListener('click', openModalFirst);
btnDetailSecond.addEventListener('click', openModalSecond);
btnDetailThird.addEventListener('click', openModalThird);

modalDetailFirst.addEventListener('click', closeModal);
modalDetailSecond.addEventListener('click', closeModal);
modalDetailThird.addEventListener('click', closeModal);


function onBtnOpenMenu() {
  openMenu();
}
function openMenu() {
  headerContainer.classList.add('open');
}
function onBtnCloseMenu() {
  closeMenu();
}
function closeMenu() {
  headerContainer.classList.remove('open');
}

function openModalFirst() {
  modalDetailFirst.classList.add('active');
}
function openModalSecond() {
  modalDetailSecond.classList.add('active');
}
function openModalThird() {
  modalDetailThird.classList.add('active');
}
function closeModal() {
  modalDetailFirst.classList.remove('active');
  modalDetailSecond.classList.remove('active');
  modalDetailThird.classList.remove('active');
}