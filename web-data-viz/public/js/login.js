function exibirMensagem(mensagem) {
  cardErro.innerText = mensagem;
}

function entrar() {
  
  let emailVar = email_input.value;
  let senhaVar = senha_input.value;

  if (emailVar.includes("@sptech.school") == true && senhaVar.length >= 6) {

    exibirMensagem("Login efetuado com sucesso!");

    setTimeout(function () {
      window.location = "index.html";
    }, 1000);
  }
  else {
    exibirMensagem("Verifique os dados e tente novamente.")
  }
}



