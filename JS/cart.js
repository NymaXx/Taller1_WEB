const list =document.querySelector('.cartContainer__list')

//let totalPrice =0;
 
renderCart = ()=>{
    cart.forEach((data) => {
        const basicProd = document.createElement('div');
        basicProd.innerHTML = `
            <img class="cartContainer__imgProd" src="${data.imageUrl}" alt="">
    
            <div class="cartContainer__description">
                <p class="cartContainer__desTitle1">${data.name}</p>
                <small class="cartContainer__text">
                    <p class="cartContainer__autor"> Autor:${data.autor}</p> 
                    <p class="cartContainer__formato">Tipo:${data.formato} </p> 
                    <p>ISBN: 9789585643017</p> 
                    <p class="cartContainer__precioResponsive">valorU: $ ${data.precio}</p>
                </small>
    
                <button class="cartContainer__deleteItemBtn"> <img class="cartContainer__imgb" src="../imgStore/deleteICON.png" alt="">Eliminar este producto</button>
            </div>
    
            <div class="cartContainer__valorU">
                <p class="cartContainer__desTitle">Valor U</p>
                <p class="cartContainer__precio"> $ ${data.precio}</p>
    
            </div>
    
            <div class= "info__separador"> </div>
            `
        
    
    
        basicProd.classList.add('cartContainer__item1');
        list.appendChild(basicProd);
    
        totalPrice += data.precio;
     });



    const generalC = document.querySelector('.gnral');
    const container = document.querySelector('.notica');
    let precioEnvio = 0;
    if(totalPrice > 0){
        precioEnvio = 11000;
        const ordenCheck = document.createElement('section');
        ordenCheck.innerHTML = `
                <div class="orden__containtergnral">
                <div class="orden__title">
                    Tu Orden
                </div>

                <div class="orden__separaddor"> </div>

                <table class="orden__table">
                    <tr>
                    <td>Subtotal</td>
                    <td >$ ${totalPrice}</td>
                    </tr>
                    <tr>
                    <td>Envio</td>
                    <td >$ 11.000</td>
                    </tr>
                    <tr class="orden__TOTAL">
                    <td>Total</td>
                    <td >$ ${totalPrice + precioEnvio}</td>
                    </tr>
                    <tr>
                </table>
                </div>

                <a href="payment.html" style="color:#ffffff;"><button class="orden__comprarBtn">
                COMPRAR</button></a>

        `
        ordenCheck.classList.add('orden');   
        generalC.appendChild(ordenCheck);

    }else{
        container.innerHTML = `
        Aun no tienes nada en tu carrito
        `
    }

}