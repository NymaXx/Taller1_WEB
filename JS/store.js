
const list = document.querySelector('.list');
const filters = document.querySelector('.filtros');
const sort = document.querySelector('.products__sort');
const infSort = document.querySelector('.products__ordenarInferior');

//funcion de creacion de los elementos
const handleCollectionResult = (querySnapshot) => {
    list.innerHTML = '';
    querySnapshot.forEach((doc) => {
        const data = doc.data();

        const basicProd = document.createElement('article');
        basicProd.innerHTML = `
            <a class="basicProd__imgCont" href='../html/productView.html?id=${doc.id}&name=${data.name}'>
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
                <a href='../html/productView.html?id=${doc.id}'>
                    <button class="basicProd__ver">Ver detalles</button>
                </a> 
            </div>
            <button class="basicProd__borrar showAdmin">Eliminar</button>
        `
    
        basicProd.classList.add('basicProd');
        list.appendChild(basicProd);

        
        const addToCartBtn = basicProd.querySelector('.basicProd__add');
        addToCartBtn.addEventListener('click', ()=>{
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


     //POR PRECIOS --> al poner los push en el arreglo PRECIOS aparece un error de firebase, cuando se pone el array c
     //categorias funciona visualmente el filtro pero no hay evidencia de que se lea con console.log
     const precios = [];
     filters.precio.forEach((checkbox, index) => {
         if(checkbox.checked){
             switch(index){
                 case 0:
                     categorias.push(productsCollection = productsCollection
                        .where('precio', '<', 30000));
                     break;
 
                 case 1:
                     categorias.push(productsCollection = productsCollection
                        .where('precio', '>=', 30000)
                        .where('precio', '<', 38000));
                     break;
 
                 case 2:
                     categorias.push(productsCollection = productsCollection
                        .where('precio', '>=', 38000)
                        .where('precio', '<', 65000));
                     break;
 
                 case 3:
                     categorias.push(productsCollection = productsCollection
                        .where('precio', '>=', 65000)
                        .where('precio', '<', 100000));
                     break;
 
                 case 4:
                     categorias.push(productsCollection = productsCollection
                        .where('precio', '>', 100000));
                     break;
             }
         }
     });
 
     if(precios.length > 0){
         productsCollection = productsCollection
         .where('precio', 'in', precios);
     }

//visualizacion de los productos filtrados
   productsCollection.get().then(handleCollectionResult);
});




//SORT

//select superior
sort.addEventListener('change', ()=>{
    let productsCollection = db.collection('products');

    if(sort.order.value){
        switch(sort.order.value){
            case 'precio_asc':
                productsCollection = productsCollection.orderBy('precio', 'asc');
                break;

            case 'precio_desc':
                productsCollection = productsCollection.orderBy('precio', 'desc');
                break;

            case 'name_desc':
                productsCollection = productsCollection.orderBy('name', 'asc');
                break;
        }
    }

    productsCollection.get().then(handleCollectionResult);

});

//select inferior
infSort.addEventListener('change', ()=>{
    let productsCollection = db.collection('products');

    if(infSort.order.value){
        switch(infSort.order.value){
            case 'precio_asc':
                productsCollection = productsCollection.orderBy('precio', 'asc');
                break;

            case 'precio_desc':
                productsCollection = productsCollection.orderBy('precio', 'desc');
                break;

            case 'name_desc':
                productsCollection = productsCollection.orderBy('name', 'asc');
                break;
        }
    }

    productsCollection.get().then(handleCollectionResult);

});


//visualizacion de los productos completos en general
db.collection("products")
    .get()
    .then(handleCollectionResult);

