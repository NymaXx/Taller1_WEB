
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
        editorial: productForm.editorial.value,
        presentacion: productForm.presentacion.value,
        volumen: productForm.volumen.value,
        dimensiones: productForm.dimensiones.value,
        capitulos: productForm.capitulos.value,
        paginas: productForm.numpaginas.value,
        peso: productForm.peso.value,
        
    };

    let error = '';
    if(!(productForm.nombre.value ||productForm.autor.value || productForm.precio.value 
        || productForm.categoria.value || productForm.idioma.value || productForm.formato.value )){
            error = 'debe llenar todos los campos';
            alert(error);
        return;
    }


    // Create a root reference
    const file = productForm.image.files[0];
    var storageRef = firebase.storage().ref();
    var fileRef = storageRef.child(`storeImages/${productForm.formato.value}/${file.name}`);
   
    //esperar a subir imagen
    fileRef.put(file).then((snapshot) => {

    //espera a obtener la url de  descarga
        snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log(downloadURL);
            product.imageUrl = downloadURL;
            product.imageRef = snapshot.ref.fullPath;

            //espera a subir la info al firestore
            db.collection("products").add(product)
            .then((docRef)=>{
                alert('Se anadio con exito el nuevo producto con el ID' + docRef.id);
            })
            .catch((error)=>{
                alert('No se ha podido anadir el nuevo producto, intentalo de nuevo' + error);
            });
            console.log('File available at', downloadURL);
        });


        console.log(snapshot);
        console.log('Uploaded a blob or file!');
    });

});




if(!loggedUser || !loggedUser.admin){
    location.href = '/html/store.html';
}