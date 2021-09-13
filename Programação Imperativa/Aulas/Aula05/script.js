// Criando a função
function cumprimentar(){
// o código vai aqui
    alert('Olá');
}

//função com parametro
function saudar(saudacao){
    alert(saudacao);
}

//precisa chamar a função

saudar('Olá')

cumprimentar(); // método

// 1. Guarda o nome do usuário.
var nomeDoUsuario = prompt('Qual o seu nome?');
// 2. Guarda a quantidade de dolares que o usuário deseja cotar.
var quantidadeDolares = prompt('Quantos dólares ele gostaria de cotar?');
// 3. Valor do dolar hoje
var cotacaoDolarHoje = 5.3;
// 4. Apresenta o resultado.
// var saudar = alert('Olá' + ' ' + nomeDoUsuario + 'US$' + ' ' + quantidadeDolares + ' ' + 'valem' + ' ' + 'R$' + ' ' + quantidadeDolares *cotacaoDolarHoje + ' ' + 'hoje.');
// Código melhorado...
var saudar = alert(`Olá ${nomeDoUsuario}. US$ ${quantidadeDolares} valem R$ ${quantidadeDolares * cotacaoDolarHoje} hoje.`);

/*
    Matemáticos (valores aritmeticos para números)
    + mais
    - menos
    * vezes
    / divido
    % resto da divisão
    ** potência

    Lógicos - responder verdeiro (true) ou falso (false)
    < maior
    > menor
    <= menor ou igual
    >= maior ou igual
    == é igual?
    === é igual mesmo? 
    !=  é diferente de?

    // Condicionais (ternários)
    [condição] ? [caso seja verdadeiro] : [caso seja falso]

    

*/
