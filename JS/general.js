const firebaseConfig = {
    apiKey: "AIzaSyBc--wcJHq3qJnXF-R75pn2Wl963Q_iAGM",
    authDomain: "noona-webstore-211.firebaseapp.com",
    projectId: "noona-webstore-211",
    storageBucket: "noona-webstore-211.appspot.com",
    messagingSenderId: "194192080159",
    appId: "1:194192080159:web:3d49ec0891952697a6442a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

let loggedUser = null;

const setLoggedUser = (info, id)=>{
  loggedUser = info;
  loggedUser.uid = id;
  userLoggedIn();
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then((doc)=>{
      if(!doc.data())return;
      setLoggedUser(doc.data(), user.uid);
    });
    getMyCart(user.uid);

  } else {
    loggedUser = null;
    cart = [];
    userLoggedOut();
    numberOfCart.innerText = '';
  }
});

const toCartBtn = document.querySelector('.header__toCartBtn');
toCartBtn.addEventListener('click', ()=>{
  location.href = './cart.html';
});




//cart  FIREBASE
let cart = [];
const numberOfCart = document.querySelector('.header__pinCartText');
const CART_COLLECTION = db.collection('cart');
const ORDERS_COLLECTION = db.collection('orders');

const addToMyCart = (product)=>{
    cart.push(product);
    CART_COLLECTION.doc(loggedUser.uid).set({
      cart,
    });
    
    numberOfCart.innerText = cart.length;
};
let el;
const deleteFromMyCart = ()=>{
   /* CART_COLLECTION.doc(uid).get(cart.id)
    .set(null);*/
    cart.forEach((i)=>{
      if(i.id == el){
        CART_COLLECTION.doc(loggedUser.uid.cart[i]).set(null);
      }
    });
    
    console.log(el);

};

let renderCart = null;
let totalPrice =0;
let renderTotal = null;

const getMyCart = (uid) => {
  CART_COLLECTION.doc(uid).get().then(snapShot =>{
    const data =snapShot.data();
    if(!data) return;
    numberOfCart.innerText = data.cart.length;
    cart =data.cart;

  
      if(renderCart) renderCart();
      if(renderTotal) renderTotal();
      
      
  });

}


//cart LOCAL STORAGE
/*const cartFromLS = localStorage.getItem('dummy__Cart');
if(cartFromLS){
    cart = JSON.parse(cartFromLS);
    if(numberOfCart){
      numberOfCart.innerText = cart.length;
    }
    
}*/