    function entrar() {
        var emailVar = email_input.value;
        var senhaVar = senha_input.value;

        if (emailVar == "@sptech.school" && senhaVar == "grupo8") {
            cardErro.className = "card_sucesso";
          mensagem_erro.innerHTML = "Login efetuado com sucesso!";
          document.querySelector(".alerta_erro").style.display = "block";

          setTimeout(function () {
            window.location = "simulador.html";
          }, 1000);
        };
        }

  
    
