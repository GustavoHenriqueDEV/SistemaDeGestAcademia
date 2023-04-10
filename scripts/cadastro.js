const firebaseConfig = {
    apiKey: "AIzaSyAydKl0FCvukcy9BfRz-cASkgzOeQwwuRQ",
    authDomain: "academiaclientes.firebaseapp.com",
    projectId: "academiaclientes",
    storageBucket: "academiaclientes.appspot.com",
    messagingSenderId: "827446785294",
    appId: "1:827446785294:web:b23fddf026efc11b2a535f"
  };

  firebase.initializeApp(firebaseConfig);

  window.addEventListener('load', function(){
    mounted();
  })


  function closeDiv(){
    var div = document.getElementById("cadastro")
    var button = document.getElementById("teste")
     button.addEventListener('click', function(){
      div.style.display = "none"
     }) 
  }
  
  function showDiv(){
    var div = document.getElementById("cadastro")
    var button = document.getElementById("cadastrar")

    button.addEventListener('click', function(){
      div.style.display = "block "
    })
  }



  function mounted(){
    var tabel = document.getElementById("alunos-table");
    var usersRef = firebase.firestore().collection("usuarios");

    usersRef.onSnapshot(function(querySnapshot) {//onSnapshot faz a leitura automatica, para não precisar reinicar a pagina
        tabel.innerHTML = ""; // Limpa a tabela antes de exibir os novos dados

        querySnapshot.forEach(function(doc) {
            var data = doc.data();

            var tr = document.createElement("tr");
            
            // Adicionar uma célula para o nome
            var tdNome = document.createElement("td");
            tdNome.textContent = data.nome;
            tr.appendChild(tdNome);

            // Adicionar uma célula para o email
            var tdEmail = document.createElement("td");
            tdEmail.textContent = data.email;
            tr.appendChild(tdEmail);

            // Adicionar uma célula para o telefone
            var tdTelefone= document.createElement("td");
            tdTelefone.textContent = data.telefone;
            tr.appendChild(tdTelefone);

            // Adicionar uma célula para a mensalidade
            var tdMensalidade = document.createElement("td");
            tdMensalidade.textContent = data.mensalidade;
            tr.appendChild(tdMensalidade);

            // Adicionar a linha à tabela
            tabel.appendChild(tr);
        });
    });
}




function deleteUser() {
  var usersRef = firebase.firestore().collection("usuarios");
  
  usersRef.delete().then(()=>{
    console.log("usuario deletado")
  }).catch((error)=>{
    console.error("Erro ao excluir")
  })

}


/** "Terminar essa função que notifica o admin quando o dia autual for igual ao dia de pagamento de mensalidade de usuário X"
function notifica(){
  let dataAtual = new Date(); // cria um objeto Date com a data atual
  let diaAtual = dataAtual.getDate(); // Vou usar do if()

  var usersRef = firebase.firestore().collection("usuarios");
  usersRef.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var userData = doc.data();
      var mensalidade = userData.mensalidade;
      console.log("Mensalidade do usuário " + doc.id + ": " + mensalidade);
    });
  }, (error) => {
    console.error("Erro ao obter usuários:", error);
  });

  if(diaAtual === mensalidade){
    console.log("usuario com a mensaldiade vencida" + mensalidade)
  }else{
    console.log("ta errado")
  }


  }

*/




  function addUser() {
    var usersRef = firebase.firestore().collection("usuarios");
    var mensalidadeValue = document.getElementById("mensalidade").value
    var mensalidadeDate = new Date(mensalidadeValue)

    var usuario = {
      nome: document.getElementsByName("nome")[0].value,
      email: document.getElementsByName("email")[0].value,
      telefone: document.getElementsByName("telefone")[0].value,
      mensalidade: mensalidadeDate.getDate()

    };  
    usersRef.add(usuario)
      .then(function(docRef) {
        console.log("Usuário adicionado com ID: ", docRef.id, usuario);
      })
      .catch(function(error) {
        console.error("Erro ao adicionar o usuário: ", error);
      });
  }