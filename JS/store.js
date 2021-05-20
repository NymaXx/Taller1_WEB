
const list = document.querySelector('.list');

const filters = document.querySelector('.filtros');


//funcion de creacion de los elementos

const handleCollectionResult = (querySnapshot) => {
    list.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const data = doc.data();

        const basicProd = document.createElement('article');
        basicProd.innerHTML = `
            <a class="basicProd__imgCont" href="../html/productView.html">
                <img class="basicProd__img" src="${data.imageUrl}" alt="" >   
            </a>
    
            <div class="basicProd__info">
                <div class="basicProd__title">
                    ${data.name}
                </div>
                <div class="basicProd__autor">
                    Autor: <strong> ${data.autor}</strong> 
                </div>
                <div class="basicProd__precio">
                    $ ${data.precio}
                </div>
                <div class="basicProd__category">
                    Categoria: <strong> ${data.categoria} </strong>
                </div>
                <div class="basicProd__idioma">
                    Idioma: <strong> ${data.idioma} </strong> 
                </div>
            </div>
            <div class="basicProd__buttons">
                <button class="basicProd__add">Añadir al carrito</button>
                <a href="../html/productView.html">
                    <button class="basicProd__ver">Ver detalles</button>
                </a> 
            </div>
        `
    
        basicProd.classList.add('basicProd');
        list.appendChild(basicProd);

    });
};


//FILTROS
filters.addEventListener('change', ()=>{
    let productsCollection = db.collection('products');

    //POR IDIOMAS
    const idiomas = [];
    filters.idioma.forEach((checkbox, index)=>{
        if(checkbox.checked){
            switch(index){
                case 0:
                    idiomas.push('Inglés');
                    break;

                case 1:
                    idiomas.push('Español');
                    break;
            }
        }
    });

    if(idiomas.length > 0){
        productsCollection = productsCollection
        .where('idioma', 'in', idiomas);
    }


    //POR CATEGORIA
    const categorias = [];
    filters.categoria.forEach((checkbox, index)=>{
        if(checkbox.checked){
            switch(index){
                case 0:
                    categorias.push('Policíaca');
                    break;

                case 1:
                    categorias.push('Terror');
                    break;

                case 2:
                    categorias.push('Juvenil');
                    break;

                case 3:
                    categorias.push('Autoayuda');
                    break;

                case 4:
                    categorias.push('Fantasía');
                    break;
            }
        }
    });

    if(categorias.length > 0){
        productsCollection = productsCollection
        .where('categoria', 'in', categorias);
    }






   productsCollection.get().then(handleCollectionResult);
});




db.collection("products")
    .get()
    .then(handleCollectionResult);

