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

const productForm = document.querySelector('.productForm');

productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(productForm.categoria.value);

    const product = {
        name: productForm.nombre.value,
        autor: productForm.autor.value,
        precio: parseInt(productForm.precio.value),
        categoria: productForm.categoria.value,
        idioma: productForm.idioma.value,
    };


    db.collection("products").add(product)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });



} );


