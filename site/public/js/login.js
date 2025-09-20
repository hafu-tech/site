function exibirMensagem(mensagem) {
  cardErro.innerText = mensagem;
}

function entrar() {

  let emailVar = email_input.value;
  let senhaVar = senha_input.value;

  if (emailVar == "" || senhaVar == "") {
    exibirMensagem("Verifique os dados e tente novamente.")
  }
  else {
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
    console.log("to aqui")

    
    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar
      })
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.idUsuario;

          cardErro.className = "card_sucesso";
          mensagem_erro.innerHTML = "Login efetuado com sucesso!";
          document.querySelector(".alerta_erro").style.display = "block";

          setTimeout(function () {
            window.location = "index.html";
          }, 1000);
        });

      } else {

        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
          console.error(texto);
          finalizarAguardar(texto);
        });
      }

    }).catch(function (erro) {
      console.log(erro);
    })

    
  }


}







