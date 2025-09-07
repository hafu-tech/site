    function entrar() {
        let emailVar = email_input.value;
        let senhaVar = senha_input.value;
        
        
        if (emailVar.includes("@sptech.school") == true && senhaVar.length >= 6) {
            cardErro.className = "card_sucesso";
          mensagem_erro.innerHTML = "Login efetuado com sucesso!";
          document.querySelector(".alerta_erro").style.display = "block";

          setTimeout(function () {
            window.location = "simulador.html";
          }, 1000);
        };
        }

  
    
