/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = document.querySelector("#cep");
const campoTelefone = document.querySelector("#telefone");
const campoEndereco = document.querySelector("#endereco");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoEstado = document.querySelector("#estado");
const botaoBuscar = document.querySelector("#buscar");
const mensagemStatus = document.querySelector("#status");

//ativação das mascaras para telefone e Cep
//$ no jquery é a mesma coisa que escrever document.querySelector no js

$(campoTelefone).mask("(00) 0000-0000");
$(campoCep).mask("00000-000");
//ouvinte de evento para o botão buscar

botaoBuscar.addEventListener("click", async function(){ // async significa que a função é assíncrona
    // validação se o cep digitado pelo usuario não tem 9 digitos incluindo o traço
    if(campoCep.value.length !== 9 ){ //lenght tamanho do que for digitado no cep
        mensagemStatus.innerHTML = "Digite um CEP válido!";
        mensagemStatus.style.color = "purple";

        //Para parar completamente a execução do código
        return
    }

    // Guardando o valor do cep digitado
    let cepDigitado = campoCep.value;
    console.log(cepDigitado);

    // AJAX - Asyncronous Javascript And XML
    /*Técnica de comunicação assíncrona (transmissão, recebimento) de dados MUITO USADA entre diferentes tipos de sistemas (site, aplicativo, jogos, software) e tecnologias (PHP, ASP, Java etc). */

    // Etapa 1: preparamos o endereço junto com o CEP digitado
    //`` templet string
    let endereco = `https://viacep.com.br/ws/${cepDigitado}/json/`;
    console.log(endereco);

    //Etapa 2: acessamos o Viacep com o endereço ajustado
    //fetch serve para não bloquear a execução de um servidor de http que estiver sendo usado (se conecta com apis = servidor que fornce dados) // await significa "esperar/aguardar"
    const resposta = await fetch(endereco); 

    //Etapa 3: (Quando o await esperou a função do Viacep terminar) apartir dai vamos extrair os dados que o Viacep acessou.
    const dados = await resposta.json(); // aguarda a resposta em formato de objeto
    console.log(dados);

    //quando causa erro no cep ser invalido ele volta como {erro:true}, sendo chave porque é um objeto e confirmando que é um erro com true.

    //Etapa 4: Lidando com os dados (emcaso de erro ou sucesso) para o usuario digitar invalido e saber que esta invalido
    if("erro" in dados){
        mensagemStatus.innerHTML = "CEP inexistente!";
        mensagemStatus.style.color = "red";
    }
    else{
        mensagemStatus.innerHTML = "CEP encontrado! :)";
        mensagemStatus.style.color = "blue";
        
        //Selecionar os campos que estãos escondidos
        const campos = document.querySelectorAll (".campos-restantes");
        
        //Loop for para acessar cada campo e remover a classe
        for(let i = 0; i < campos.length; i++){
            campos[i].classList.remove("campos-restantes");
        }
    
        //Atribuindo cada dado do ViaCEP à cada campo do formulário. ou seja o endereço que o ViaCEP pega vai e coloca direto nos campos.
        campoEndereco.value = dados.logradouro;
        campoBairro.value = dados.bairro;
        campoCidade.value = dados.localidade;
        campoEstado.value = dados.uf;
    }
        

}); //final do função/evento do botao
