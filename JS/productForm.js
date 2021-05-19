const firebaseConfig = {
    apiKey: "AIzaSyBc--wcJHq3qJnXF-R75pn2Wl963Q_iAGM",
    authDomain: "noona-webstore-211.firebaseapp.com",
    projectId: "noona-webstore-211",
    storageBucket: "noona-webstore-211.appspot.com",
    messagingSenderId: "194192080159",
    appId: "1:194192080159:web:3d49ec0891952697a6442a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

const productForm = document.querySelector('.productForm');
const productImg = document.querySelector('.productForm__img');




productForm.image.addEventListener('change', ()=>{
    const reader = new FileReader();

    reader.onload = (e)=>{
        productImg.setAttribute('src', e.target.result);
    }
    reader.readAsDataURL(productForm.image.files[0]);
});





productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(productForm.categoria.value);

    const product = {
        name: productForm.nombre.value,
        autor: productForm.autor.value,
        precio: parseInt(productForm.precio.value),
        categoria: productForm.categoria.value,
        idioma: productForm.idioma.value,
        descripcion: productForm.descripcion.value ,
        formato: productForm.formato.value,
        
    };

    let error = '';
    if(!(productForm.nombre.value ||productForm.autor.value || productForm.precio.value 
        || productForm.categoria.value || productForm.idioma.value || productForm.formato.value )){
            error = 'debe llenar todos los campos';
            alert(error);
        return;
    }
    

    // Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');


    console.log(productForm.image.files);


    db.collection("products").add(product)
    .then((docRef)=>{
        alert('Se anadio con exito el nuevo producto con el ID' + docRef.id);
    })
    .catch((error)=>{
        alert('No se ha podido anadir el nuevo producto, intentalo de nuevo' + error);
    });
    
return;



} );


