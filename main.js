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

