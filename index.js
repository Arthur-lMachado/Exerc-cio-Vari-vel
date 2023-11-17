//-------------------

let nome = ""
let cidade = ""


console.log(typeof nome);
console.log(typeof cidade);


nome = prompt("Por favor, digite seu nome:");
cidade = prompt("Por favor, digite sua cidade");


console.log(typeof nome);
console.log(typeof cidade);


console.log(`Olá, meu nome é ${nome} e eu moro em ${cidade}.`);

//-------------------

let respostaProgramar = prompt("Você gosta de programar? (Sim ou Não)");
let respostaViagem = prompt("Você já viajou para fora do país? (Sim ou Não)");
let respostaAnimais = prompt("Você tem animais de estimação? (Sim ou Não)");


console.log(`Você gosta de programar? Resposta: ${respostaProgramar}`);
console.log(`Você já viajou para fora do país? Resposta: ${respostaViagem}`);
console.log(`Você tem animais de estimação? Resposta: ${respostaAnimais}`);

//-------------------

let x = 1;
let y = 2;

[x, y] = [y, x];

console.log(`Novo x: ${x}`);
console.log(`Novo y: ${y}`);

//-------------------

let primeiroNumero = parseFloat(prompt("Digite o primeiro número:"));
let segundoNumero = parseFloat(prompt("Digite o segundo número:"));

let soma = primeiroNumero + segundoNumero;
let multiplicacao = primeiroNumeroNumero * segundoNumero;

console.log(`1. A soma dos números é: ${soma}.`);
console.log(`2. A multiplicação dos números é: ${multiplicacao}.`);

//-------------------
