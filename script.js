// 1. Deve ser desenvolvido um programa que realize um CRUD de carros.
// Os inputs devem ser feitos através do PROMPT do HTML. O
// funcionamento deve ser o seguinte:
// Ao abrir a página, o sistema deve apresentar a seguinte tela:

// Bem-vindo ao sistema de CRUD de veículos:

// No momento, o sistema tem X carros cadastrados

// Escolha uma das opções para interagir com o sistema:

// 1 - Cadastrar veículo
// -> Ao entrar nesta opção o sistema deve pedir os seguintes
// dados: modelo, marca, ano, cor e preco.
// -> O veículo deve ser adicionado na lista de veículos que
// armazena todos os veículos cadastrados
// -> Todo veículo deve ter um identificador único. Este
// identificador deve ser gerado de forma automática

// 2 - Listar todos os veículos
// -> Ao entrar nesta opção o sistema deve listar os veículos
// com o seguinte layout:
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000
// ID: 1 | Modelo: Civic| Marca: Honda | Ano: 2014/2015 | Cor: Azul |
// Preço: R$40.000

// 3 - Filtrar veículos por marca
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar a marca que quer filtrar
// -> Deve ser listado os veículos que forem da mesma marca
// -> A lista deve ter o seguinte layout:
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000
// ID: 1 | Modelo: Civic| Cor: Azul | Preço: R$40.000

// 4 - Atualizar veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve permitir que o usuário
// atualize somente a cor e o preço.

// 5 - Remover veículo
// -> Ao entrar nesta opção o sistema deve pedir para o
// usuário digitar o IDENTIFICADOR do veículo
// -> O Sistema deve verificar se o veículo existe ou não e
// mostrar a seguinte mensagem caso o veículo não exista:
// "Veículo, não encontrado. O usuário deve voltar para o menu
// inicial depois"
// -> Se o veículo existir, o sistema deve remover o veículo

// 6 - Sair do sistema

// Regras:
// - Os dados de um veículo são: identificador, modelo, marca,
// ano, cor, preco

// - A opção de filtro deve ser por marca e ordenada pelo preco
// - A lista de veículos deve estar ordenada pelo preco.
// - Só deve ser possível atualizar a cor e o preço do veículo.

alert("Bem-vindo ao sistema de CRUD de veículos:");
alert(
  `No momento, o sistema não tem carros cadastrados
Escolha uma das opções para interagir com o sistema:`
);

let carros = [];
let id = 0;

function menuOpcao() {
  let opcao = Number(
    prompt(
      `Digite a opção desejada :
      1-Cadastrar veículo
      2-Listar todos os veículos
      3-Filtrar veículos por marca
      4-Atualizar veículo
      5-Remover veículo
      6-Sair do sistema`
    )
  );
  switch (opcao) {
    case 1:
      cadastrarVeiculo();
      break;

    case 2:
      listarVeiculos();
      break;

    case 3:
      filtrarVeiculo();
      break;

    case 4:
      atualizarVeiculo();
      break;

    case 5:
      removerVeiculo();
      break;

    case 6:
      sairDoSistema();
      break;

    default:
      alert("Opção inválida.");
      menuOpcao();
      break;
  }
}

menuOpcao();

function cadastrarVeiculo() {
  let modelo = prompt("Digite o modelo do veículo:");
  let marca = prompt("Digite a marca do veículo:");
  let ano = Number(prompt("Digite o ano do veículo:"));
  let cor = prompt("Digite a cor do veículo:");
  let preco = Number(prompt("Digite o preço do veículo:"));

  let veiculo = {
    id: id++,
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor,
    preco: preco,
  };

  carros.push(veiculo);
  alert("O veículo foi cadastrado com sucesso!");

  menuOpcao();
  console.log(carros);
  return carros;
}

function listarVeiculos() {
  carros.sort(function (a, b) {
    return a.preco - b.preco;
  });
}

function filtrarVeiculo() {
  let marcaCarro = prompt("Deseja filtrar os carros por qual marca?");
  let veiculosFiltrados = carros.filter(function (veiculo) {
    return veiculo.marca === marcaCarro;
  });

  veiculosFiltrados.sort(function (a, b) {
    return a.preco - b.preco;
  });
  
  veiculosFiltrados.forEach((veiculo) => {
    console.log(
      `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor}
        | Preço: R$${veiculo.preco}`
    );
  });
}

function atualizarVeiculo() {
  let identificadorVeiculo = Number(prompt("Digite o ID do veículo"));
  let veiculo = carros.find((veiculo) => veiculo.id == identificadorVeiculo);
  if (veiculo) {
    veiculo.cor = prompt("Digite a nova cor");
    veiculo.preco = Number(prompt("Digite o novo preço"));
    alert("Veículo atualizado com sucesso");
  } else {
    alert("Veiculo não encontrado");
  }
  menuOpcao();
}

function removerVeiculo() {
  let identificadorVeiculo = Number(prompt("Digite o ID do veículo"));
  let indexVeiculo = carros.findIndex(
    (veiculo) => veiculo.id == identificadorVeiculo
  );
  if (indexVeiculo == -1) {
    alert("Veículo não encontrado.");
  } else {
    carros.splice(indexVeiculo, 1);
    alert("Veículo removido com sucesso!");
  }
  console.log(indexVeiculo);

  menuOpcao();
}

function sairDoSistema() {
  console.log("Obrigado, tenha um bom dia.");
}

console.log("FIM")
