const navegacaoMenu = document.querySelector(".navegacaoMenu");

function whereClick(obj){
    let whereClick = obj.target.id
    
    switch(whereClick){
        case "cmdNovaOrdem":
            
        break;
        case "cmdCadastrarClientes":
            
        break;
        case "cmdCadastrarFuncionarios":
            
        break;
    }
}

navegacaoMenu.addEventListener("click", (clickedObject)=>{
    whereClick(clickedObject)
})






/**
 * ##############
 * #    ASDF    #
 * ##############
 */