const inputUsuario = document.querySelector("#usuario")
const inputSenha = document.querySelector("#senha")
const cmdLogar = document.querySelector(".cmdLogin")
let valida = [];

function getInputValue(){
    let usuarioValue = inputUsuario.value;
    let senhaValue = inputSenha.value;
    if(usuarioValue !== ""){
        valida.push(usuarioValue);
        verificaUsuario(usuarioValue, senhaValue)
        let meuJSON = JSON.stringify(valida)
        localStorage.setItem("sessao", meuJSON)
    } else{
        alert("Preencha os campos para continuar")
    }
}

function verificaUsuario(user, pass){
  let verifica = usuarios.some(i=>{
      if(i.Usuario.toUpperCase() === user.toUpperCase() && i.Senha === pass){
          return true;
      } else{
          return false;
      }
  })
  gotoSystem(verifica)
}

function gotoSystem(verificado){
    if(verificado==true){
        window.location.href = "home.html";
    }else{
        alert("A tentativa de login falhou. Tente novamente")
    }
}

cmdLogar.addEventListener("click", function(){
    getInputValue()
})







/**
 * ##############
 * #    ASDF    #
 * ##############
 */