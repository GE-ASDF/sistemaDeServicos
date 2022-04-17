const inputUsuario = document.querySelector("#usuario")
const inputSenha = document.querySelector("#senha")
const cmdLogar = document.querySelector(".cmdLogin")
let valida = [];

function getInputValue(){
    let usuarioValue = inputUsuario.value;
    let senhaValue = inputSenha.value;
    verificaEmpty(usuarioValue, senhaValue)    
}

function verificaEmpty(user, pass){
    if(user == "" || pass == ""){
        alert("Preencha os campos para continuar")
    } else{
        verificaUsuario(user, pass)
    }
}

function pushInArray(usuario){
    valida.push(usuario);
}   

function verificaUsuario(user, pass){
  let verifica = usuarios.some(i=>{
      if(i.Usuario.toUpperCase() === user.toUpperCase() && i.Senha === pass){
        pushInArray(user.toUpperCase())
        initSessao(valida)
        return true;
      } else{
        return false;
      }
  })
  gotoSystem(verifica)
}

function initSessao(userLogged){
    let meuJSON = JSON.stringify(userLogged)
    localStorage.setItem("sessao", meuJSON)
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