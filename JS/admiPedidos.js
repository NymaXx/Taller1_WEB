const orderList = document.querySelector('.gnralOrders');


const handleOrderCollection = (querySnapshot)=>{
    orderList.innerHTML= '';

    querySnapshot.forEach((doc)=>{
        const data = doc.data();
        const basicOrder = document.createElement('section');
        basicOrder.innerHTML = `
        <div class="AdminContainer__res1">
            <div class="AdminContainer__title">
                <strong> <em class="AdminContainer__userName"> ${data.nombre}</em> </strong>
            </div>
            <div class="AdminContainer__revision"> 
                <div class="AdminContainer__nombreC">
                    <div class="AdminContainer__label">
                        Nombre(s):
                    </div>
                    <div class="AdminContainer__input">  ${data.nombre}</div>
                </div>

                <div class="AdminContainer__apellidoC">
                    <div class="AdminContainer__label">
                        Apellido(s):
                    </div>
                    <div class="AdminContainer__input"> ${data.apellido} </div>
                </div>

                <div class="AdminContainer__ciudadC">
                    <div class="AdminContainer__label">
                        Ciudad:
                    </div>
                    <div class="AdminContainer__input"> ${data.ciudad} </div>
                </div>

                <div class="AdminContainer__direccionC">
                    <div class="AdminContainer__label">
                        Direccion:
                    </div>
                    <div class="AdminContainer__input">  ${data.direccion}</div>
                </div>

            </div>
        </div>

        <div class="pedido__resumen">
            <div class="pedido__resTitle">Resumen</div>
            <div class="pedido__separador"></div>

            <div class="pedido__descripcion">

                <div class="pedido__imgLib">
                    Número de <br> artículos: <br> <strong> ${data.productIds.length}</strong>
                </div>

                <div class="pedido__descText">
                    <div class="pedido__libroTitle">
                    Total: $ ${data.total}
                    </div>
                    <div class="pedido__precio">
                        Valor envio: $ 11.000
                    </div>

                </div>
                
            </div>
    
        </div>  
        
        `

        basicOrder.classList.add('AdminContainer');
        orderList.appendChild(basicOrder);
    });
}

toOrderColection = ()=>{
    db.collection("orders")
    .get()
    .then(handleOrderCollection);
}
    

