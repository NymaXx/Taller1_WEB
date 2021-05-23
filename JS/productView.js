const params = new URLSearchParams(location.search);
const id = params.get('id');
console.log(id);
const addFromDetail = document.querySelector('.productV__anadirAlCarro');

/*
addFromDetail.addEventListener('click', ()=>{
    if(loggedUser){
        console.log(cart, loggedUser);
        addToMyCart({
            ...data,
            id: doc.id,
        });
        //localStorage.setItem('dummy__Cart', JSON.stringify(cart));  //in function
        //numberOfCart.innerText = cart.length;
    }else{
        alert('Por favor iniciar sesión o registrarse para poder añadir elementos al carrito');
         }
})
*/

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
const prodDescrip = document.querySelector('.productV__textExpand');
const espEdicion = document.querySelector('.productV__espListEdic');
const prodIdioma = document.querySelector('.productV__espListIdiom');
const numPag = document.querySelector('.productV__espListNumPag');
const numCap = document.querySelector('.productV__espListNumCap');
const prodDim = document.querySelector('.productV__espListDim');
const prodPeso = document.querySelector('.productV__espListPeso');


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
        prodDescrip.innerText = data.descripcion;
        espEdicion.innerHTML = `<strong>Volumen:</strong> ${data.volumen}`;
        prodIdioma.innerHTML = `<strong>Idioma:</strong> ${data.idioma} `;
        numPag.innerHTML = `<strong>Número de páginas:</strong> ${data.paginas} `;
        numCap.innerHTML = `<strong>Número de  capitulos:</strong> ${data.capitulos} `;
        prodDim.innerHTML = `<strong>Dimensiones:</strong> ${data.dimensiones} `;
        prodPeso.innerHTML = `<strong>Peso:</strong> ${data.peso} `;
    });


    //CARRUSEL DEL FONDO
    const slyderC = document.querySelector('.interest__slyder');
    let currentSlidee = 0;


    function handleInterval(){
        currentSlidee++;
        if(currentSlidee >=4){
            currentSlidee =0;
        }
        slyderC.style.transform = `translate(-${ 300 * currentSlidee }px, 0px)`;
    }

    setInterval(handleInterval, 2500);
