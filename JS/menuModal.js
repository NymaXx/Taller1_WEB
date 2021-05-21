//Menu hamburguesa modal

const hamburguesaBtn = document.querySelector('.header__menuResponsiveH');
const menuModal = document.querySelector('.menuModal');
const menuBackdrop = document.querySelector('.menuModal__backdrop');

function handleModalAppear2(){
    menuModal.style.opacity = 1;
}

function handleOpenModal2 () {
    menuModal.style.display = 'initial';
  document.body.style.overflow = 'hidden';

  setTimeout(handleModalAppear2, 1);
}

function handleCloseModal2(){
    menuModal.style.opacity = 0;
    document.body.style.overflow = 'flex';
    setTimeout(function (){
        menuModal.style.display = 'none';
    }, 500);
}



menuBackdrop.addEventListener('click', handleCloseModal2);
hamburguesaBtn.addEventListener('click', handleOpenModal2);