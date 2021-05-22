
//showAdmin es la clase para las cosas que solo ven los admis


function userLoggedIn(){
    const iconClose = document.querySelector('.imgLogINout');
    iconClose.src = '../imgStore/logOUTICON.png';

    if(loggedUser.admin){
        const showLoggedAdmin = document.querySelectorAll('.showAdmin');
        showLoggedAdmin.forEach((elem)=>{
            console.log(elem);
            elem.style = "display:flex";
        });
    }
   
   
}

function userLoggedOut(){
    iconClose.src = '../img/ingresaBUTTON.png';
    
}