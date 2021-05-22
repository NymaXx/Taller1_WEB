const authModal = document.createElement('section');
authModal.classList.add('authForm');

authModal.innerHTML = `
<form class="container">
    <div class="authForm__title">
        <div class="authForm__titlee">   </div>
    </div>

    <div class="authForm__name">
        <div class="authForm__label">
            Nombre:
        </div>
        <input type="text" class="authForm__input" name="nombre">
    </div>
    

    <div class="authForm__email">
        <div class="authForm__label">
            E-mail:
        </div>
        <input type="email" class="authForm__input" name="email">

    </div>
    
    <div class="authForm__password">
        <div class="authForm__label">
            Contraseña:
        </div>
        <input type="password" class="authForm__input" name="password">
    </div>
    
    <div class="authForm__error">  </div>

    <div class="authForm__buttons">
        <button type="button" class="authForm__loginBtn">Ir a Ingresar</button>
        <button type="button" class="authForm__registerBtn">Ir a Registro</button>
    </div>
    
    <button type="submit" class="authForm__registerBtn2">Enviar</button>

</form>
`;

document.body.appendChild(authModal);

const authForm = authModal.querySelector('.container');
const regFields = authForm.querySelector('.authForm__name');
const logBtn = authForm.querySelector('.authForm__loginBtn');
const toRegBtn = authForm.querySelector('.authForm__registerBtn');
const modalError = authForm.querySelector('.authForm__error');
const title = authForm.querySelector('.authForm__titlee');
let isInLogin =  true;


function handleGoToLogin (){
    regFields.style = "display:none";
    logBtn.style = "display:none";
    toRegBtn.style = "";
    isInLogin = true;
    title.innerHTML = '<strong> Ingresar </strong>';
};

logBtn.addEventListener('click', handleGoToLogin);

toRegBtn.addEventListener('click', ()=>{
    regFields.style = "";
    logBtn.style = "";
    toRegBtn.style = "display:none";
    isInLogin = false;
    title.innerHTML = '<strong> Registrarse </strong>';
});

handleGoToLogin ();


authModal.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('submit');
    //para obtener los datos
    const regName = authForm.nombre.value;
    const email = authForm.email.value;
    const password = authForm.password.value;



    if(isInLogin) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                console.log(error);
                modalError.innerText = 'El correo o contraseña son incorrectos. Inténtelo nuevamente';
            });
    }else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                console.log(user);
                
                db.collection('users').doc(user.uid).set({
                    nombre: regName,
                    email: email,
                });
            })
            .catch((error) => {
                console.log(error);
                modalError.innerText = 'El correo con el que desea registrarse ya está en uso';
            });
    };

});

