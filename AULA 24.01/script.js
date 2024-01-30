// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

let cadastroVeiculo = [];

let veiculo = {
    ID: 0,
    modelo: 0,
    marca: 0,
    ano: 0,
    cor: 0,
    preco: 0,
}

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática
let continuar = true;

function cadastrarVeiculo(){
while(continuar){
   veiculo.modelo = prompt("Digite o modelo do veículo:");
   veiculo.marca = prompt("Digite a marca do veículo:");
   veiculo.ano = prompt("Digite o ano do veículo:");
   veiculo.cor = prompt("Digite a cor do veículo:");
   veiculo.preco = prompt("Digite o preço do veículo:");

   veiculo.ID++
   cadastroVeiculo.push({...veiculo});

   continuar = confirm("Deseja continuar cadastrando?");
} 

menuInicial();
}

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

function listarVeiculo(){
    console.log(cadastroVeiculo);
    
    let voltar = confirm("Voltar ao Menu inicial?")

        if(voltar){
            menuInicial();
        } else {
            alert("Volte Sempre!")
        }
}

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
let listaFiltrados

function filtrarVeiculo(){
    let filtro = prompt("Digite a marca do veículo:");
    let veiculoFiltrado = cadastroVeiculo.filter(veiculo => veiculo.marca.toLowerCase() === filtro.toLowerCase());

    if (veiculoFiltrado.lenght === 0) {
        alert("Marca não localizada");
    } else {
        let listaFiltrados = "Veículos da Marca " + filtro + ":";
        for (let veiculo of veiculoFiltrado){
                listaFiltrados += `ID: ${veiculo.ID} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}\n`;
            }
            alert(listaFiltrados);
    }

    let voltar = confirm("Voltar ao Menu inicial?")

        if(voltar){
            menuInicial();
        } else {
            alert("Volte Sempre!")
        }
}

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

function atualizarVeiculo() {
    let idVeiculo = prompt("Digite o ID do veículo que deseja atualizar:");
    let veiculoAtualizar = cadastroVeiculo.find(veiculo => veiculo.ID === parseInt(idVeiculo));

    if (veiculoAtualizar) {
        veiculoAtualizar.cor = prompt("Digite a nova cor do veículo:");
        veiculoAtualizar.preco = prompt("Digite o novo preço do veículo:");
        alert("Veículo atualizado com sucesso!");
    } else {
        alert("Veículo não encontrado. Retornando ao menu inicial.");
        menuInicial();
    }

    let voltar = confirm("Voltar ao Menu inicial?")

        if(voltar){
            menuInicial();
        } else {
            alert("Volte Sempre!")
        }
    
}

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

function removerVeiculo() {
    let idVeiculo = prompt("Digite o ID do veículo que deseja remover:");
    let indexVeiculo = cadastroVeiculo.findIndex(veiculo => veiculo.ID === parseInt(idVeiculo));

    if (indexVeiculo !== -1) {
        cadastroVeiculo.splice(indexVeiculo, 1);
        alert("Veículo removido com sucesso!");
    } else {
        alert("Veículo não encontrado. Retornando ao menu inicial.");
    }

    let voltar = confirm("Voltar ao Menu inicial?")

        if(voltar){
            menuInicial();
        } else {
            alert("Volte Sempre!")
        }
}

// 6 - Sair do sistema
function sairSistema(){
    alert("Volte Sempre!")
}
// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco

// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

function menuInicial(){
    let sistema = prompt(`Escolha a opção desejada: 
    1- Cadastrar Veículo; 
    2- Listar Todos os Veículos; 
    3- Filtrar Veículos por Marca; 
    4- Atualizar Veículo; 
    5- Remover Veículo; 
    6- Sair do Sistema;`);
    
    switch (parseInt(sistema)){
        case 1: 
            cadastrarVeiculo();
        break
        case 2: 
            listarVeiculo();
        break
        case 3: 
            filtrarVeiculo();
        break
        case 4: 
            atualizarVeiculo();
        break
        case 5: 
            removerVeiculo();
        break
        case 6: 
            sairSistema();
        break
        default: 
            alert("Opção inválida!");
            menuInicial();
        }
    }
    
    menuInicial();