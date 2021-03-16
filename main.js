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

function handleOpenModal () {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

btnOpenModal.addEventListener('click', handleOpenModal);

//modal animation

const modalSlyder = document.querySelector('.modal__slyder');
let currentModalSlide = 0;
function handlePdfInterval(){
    currentModalSlide++;
    if(currentModalSlide >=8){
        currentModalSlide =0;
    }
    modalSlyder.style.transform = `translate(0px, -${ 239 * currentModalSlide }px)`;
    console.log("sfunciona");
}

setInterval(handlePdfInterval, 2500);