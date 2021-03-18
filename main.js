//Galery carrousel

const slyder = document.querySelector('.galery__slyder');
let currentSlide = 0;


function handleInterval(){
    currentSlide++;
    if(currentSlide >=11){
        currentSlide =0;
    }
    slyder.style.transform = `translate(-${ 300 * currentSlide }px, 0px)`;
}

setInterval(handleInterval, 2500);

//Description pdf interaction

const pdfSlyder = document.querySelector('.description__slyder');
let currentPdfSlide = 0;
function handlePdfInterval(){
    currentPdfSlide++;
    if(currentPdfSlide >=8){
        currentPdfSlide =0;
    }
    pdfSlyder.style.transform = `translate(-${ 194 * currentPdfSlide }px, 0px)`;
    console.log("sirve");
}

setInterval(handlePdfInterval, 2500);



//to Modal interaction

const btnOpenModal = document.querySelector('.btninteract');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.modal__backdrop');

function handleModalAppear(){
    modal.style.opacity = 1;
}

function handleOpenModal () {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';

  setTimeout(handleModalAppear, 1);
}

function handleCloseModal(){
    modal.style.opacity = 0;
    document.body.style.overflow = 'initial';
    setTimeout(function (){
        modal.style.display = 'none';
    }, 500);
}



backdrop.addEventListener('click', handleCloseModal);
btnOpenModal.addEventListener('click', handleOpenModal);


//modal animation

const modalSlyder = document.querySelector('.modal__slyder');
let currentModalSlide = 0;
function handleModalInterval(){
    currentModalSlide++;
    if(currentModalSlide >=8){
        currentModalSlide =0;
    }
    modalSlyder.style.transform = `translate(0px, -${ 478 * currentModalSlide }px)`;
    console.log("sfunciona");
}

setInterval(handleModalInterval, 3500);


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