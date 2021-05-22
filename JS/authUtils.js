
//showAdmin es la clase para las cosas que solo ven los admis
const authButton = document.querySelector('.modalLoginButton');
const iconClose = document.querySelector('.imgLogINout');
const openModal = document.querySelector('.authForm');

function userLoggedIn(){
    console.log(loggedUser);
    iconClose.src = '../imgStore/logOUTICON.png'; //cambio de  icono para logOut

    authButton.addEventListener('click', ()=>{ //Para ocultar el Modal y Cerrar sesion
    firebase.auth().signOut();
    location.reload();
    });

    if(loggedUser.admin){
        const showLoggedAdmin = document.querySelectorAll('.showAdmin');
        showLoggedAdmin.forEach((elem)=>{
            elem.style = "display:flex";
        });
    }

    openModal.style = 'display:none';
}

function userLoggedOut(){
    iconClose.src = '../img/ingresaBUTTON.png'; //cambio de  icono para logIn
    console.log(loggedUser);

    authButton.addEventListener('click', ()=>{ //Para Mostrar el Modal e ingresar
        openModal.style = 'display: block';
    });

    
}