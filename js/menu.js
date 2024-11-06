//JS DO PROF
/*//selecionando a palavra "Menu"
const botaoMenu = document.querySelector(".titulo-menu a");

//Selecionando a lista de links do menu
const listaDelinks = document.querySelector(".links-menu");

//ouvinte de evento, para clicar no botao Menu
botaoMenu.addEventListener("click", function(event){
    event.preventDefault();
}); //addEventListerner clica uma função

//alternar a classe aberto entre ativado/desativado
listaDelinks.classList.toggle("aberto");

if(listaDelinks.classList.contains("aberto")){
    botaoMenu.innerhtml = "fechar &times;"
}
else{
    botaoMenu.innerHTML = "Meu &equiv;"
}
*/

//MEU JS
// Seleciona o botão de menu (adicione um ID ao botão se necessário)
const botaoMenu = document.querySelector(".titulo-menu a"); 
// Seleciona a lista de links do menu
const linksMenu = document.querySelector(".links-menu");

// Verifica se o botão e o menu foram encontrados antes de adicionar o evento
if (botaoMenu && linksMenu) {
  botaoMenu.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que o link redirecione a página
    linksMenu.classList.toggle("aberto"); // Alterna a classe 'aberto' para exibir ou ocultar o menu
  });
}
