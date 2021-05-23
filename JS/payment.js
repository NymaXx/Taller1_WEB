
const generalC = document.querySelector('.gnral');
const container = document.querySelector('.notica');
let precioEnvio = 0;

renderTotal = () =>{
cart.forEach((data) => {
    totalPrice += data.precio; 
});
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
//});
}