const params = new URLSearchParams(location.search);
const id = params.get('id');
console.log(id);

if(!id){
    location.href= './404.html';
}

//obtener los objetos
const prodImage = document.querySelector('.productV__imge');
const prodName = document.querySelector('.productV__titulo');
const prodAutor = document.querySelector('.productV__autor');
const prodPrecio = document.querySelector('.productV__precio');
const prodEditorial = document.querySelector('.productV__detailDataEditorial');
const prodPresentacion = document.querySelector('.productV__detailDataPresentacion');
const prodAutDet = document.querySelector('.productV__detailDataAutor');
const prodCategoria = document.querySelector('.productV__detailDataCategoria');
const prodFormato = document.querySelector('.productV__detailDataFormato');


db.collection('products')
    .doc(id)
    .get()
    .then((doc)=>{
        console.log(doc.id, doc.data());

        const data = doc.data();
        if(!data){
            location.href= './404.html';
        }

        //cambio dinamico de los datos
        prodImage.setAttribute('src', data.imageUrl);
        prodImage.setAttribute('width', 312)
        prodName.innerText = data.name;
        prodAutor.innerText = data.autor;
        prodPrecio.innerText = `$ ${data.precio}`;
        prodEditorial.innerText = data.editorial;
        prodPresentacion.innerText = data.presentacion;
        prodAutDet.innerText = data.autor;
        prodCategoria.innerText = data.categoria;
        prodFormato.innerText = data.formato;




    });