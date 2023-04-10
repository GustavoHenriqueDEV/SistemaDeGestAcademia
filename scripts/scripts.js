const firebaseConfig = {
  apiKey: "AIzaSyAydKl0FCvukcy9BfRz-cASkgzOeQwwuRQ",
  authDomain: "academiaclientes.firebaseapp.com",
  projectId: "academiaclientes",
  storageBucket: "academiaclientes.appspot.com",
  messagingSenderId: "827446785294",
  appId: "1:827446785294:web:b23fddf026efc11b2a535f"
};

firebase.initializeApp(firebaseConfig);

function login(){
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  

  firebase.auth().signInWithEmailAndPassword(user, pass)
    .then((userCredential) => {
      // Usuário autenticado com sucesso
      var user = userCredential.user;
      window.location.href = "login.html"
      console.log(user, "logado");
    })
    .catch((error) => {
      // Erro ao autenticar o usuário
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorMessage);
    });

}