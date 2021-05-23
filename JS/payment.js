
const payForm = document.querySelector('.payForm');
let total;

payForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const productIds = [];
    cart.forEach((data)=>{
        productIds.push(data.id);
    });

    const order = {
        nombre: payForm.nombres.value,
        apellido: payForm.apellidos.value,
        tipoDoc: payForm.tipoDoc.value,
        numDoc: payForm.numDoc.value,
        pais: payForm.pais.value,
        depto: payForm.depto.value,
        ciudad: payForm.ciudad.value,
        direccion: payForm.dir.value,
        tipoTarh: payForm.tipoTarjeta.value,
        numTarjeta: payForm.numTarjeta.value,
        fecha: payForm.fecha.value,
        nombreTarjeta: payForm.nombreTarjeta.value,
        cvv: payForm.cvv.value,
        productIds,
        total: total,
        userID: loggedUser.uid,
    }

    ORDERS_COLLECTION.add(order)
    .then((docRef)=>{
        console.log(docRef.id);
        
        CART_COLLECTION.doc(loggedUser.uid).set({
            cart: [],
        });
        location.href = './thanks.html';
    });
    
    console.log(order);

})



//para visualizar el precio total y con envio en la otra pagina (payment) 
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

        `
        ordenCheck.classList.add('orden');   
        generalC.appendChild(ordenCheck);
        total =totalPrice + precioEnvio;

    }else{
        container.innerHTML = `
        Aun no tienes nada en tu carrito
        `
    }
}
