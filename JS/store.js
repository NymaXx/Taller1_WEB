
const list = document.querySelector('.list');

db.collection("products")
    .get()
    .then((querySnapshot) => {
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
    })

