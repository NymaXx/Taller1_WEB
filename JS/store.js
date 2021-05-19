const products = [
    {
        img: '../imgStore/milveceshastasiempre.jpg',
        title: 'MIL VECES HASTA SIEMPRE',
        autor: 'Jhon Green',
        precio: 32000,
        category: 'Juvenil',
        idioma: 'Español',
    },

    {
        img: '../imgStore/milveceshastasiempre.jpg',
        title: 'MIL VECES HASTA SIEMPRE',
        autor: 'Jhon Green',
        precio: 32000,
        category: 'Juvenil',
        idioma: 'Español',
    },

    {
        img: '../imgStore/milveceshastasiempre.jpg',
        title: 'MIL VECES HASTA SIEMPRE',
        autor: 'Jhon Green',
        precio: 32000,
        category: 'Juvenil',
        idioma: 'Español',
    },

    {
        img: '../imgStore/milveceshastasiempre.jpg',
        title: 'MIL VECES HASTA SIEMPRE',
        autor: 'Jhon Green',
        precio: 32000,
        category: 'Juvenil',
        idioma: 'Español',
    },

    {
        img: '../imgStore/milveceshastasiempre.jpg',
        title: 'MIL VECES HASTA SIEMPRE',
        autor: 'Jhon Green',
        precio: 32000,
        category: 'Juvenil',
        idioma: 'Español',
    }

];


const list = document.querySelector('.list');

function handleProductItem (item) {
    const basicProd = document.createElement('article');
    basicProd.innerHTML = `
        <a class="basicProd__imgCont" href="../html/productView.html">
            <img class="basicProd__img" src="${item.img}" alt="" >   
        </a>

        <div class="basicProd__info">
            <div class="basicProd__title">
                ${item.title}
            </div>
            <div class="basicProd__autor">
                Autor: <strong> ${item.autor}</strong> 
            </div>
            <div class="basicProd__precio">
                $ ${item.precio}
            </div>
            <div class="basicProd__category">
                Categoria: <strong> ${item.category} </strong>
            </div>
            <div class="basicProd__idioma">
                Idioma: <strong> ${item.idioma} </strong> 
            </div>
        </div>
        <div class="basicProd__buttons">
            <button class="basicProd__add">Añadir al carrito</button>
            <a href="../html\productView.html">
                <button class="basicProd__ver">Ver detalles</button>
            </a> 
        </div>
    `

    basicProd.classList.add('basicProd');

    list.appendChild(basicProd);
}

products.forEach(handleProductItem)