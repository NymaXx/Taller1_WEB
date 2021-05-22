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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    db.collection('users').doc(user.uid).get().then((doc)=>{
      loggedUser = doc.data();
      loggedUser.uid = user.uid;

      userLoggedIn();
    });
  } else {
    loggedUser = null;
    userLoggedOut();
  }
});

const toCartBtn = document.querySelector('.header__toCartBtn');
toCartBtn.addEventListener('click', ()=>{
  location.href = './cart.html';
});

