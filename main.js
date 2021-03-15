const slyder = document.querySelector('.galery__slyder');
let currentSlide = 0;


function handleInterval(){
    currentSlide++;
    if(currentSlide >=11){
        currentSlide =0;
    }
    slyder.style.transform = `translate(-${ 300 * currentSlide }px, 0px)`;
}

setInterval(handleInterval, 1000);

