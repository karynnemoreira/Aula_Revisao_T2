//String = texto, guardada entre aspas "", '', ``

//VAR = Variáveis VAR podem ser declaradas novamente e atualizadas. Isso significa que podemos fazer uma alteração dentro do mesmo escopo. 


//Escopo GLOBAL
var cor = "azul"  //Aqui a variável cor tem um escopo global, porque existe FORA de uma função.

cor = 'pink' //Aqui mudamos o valor de azul para pink

cor = `cinza` // Aqui mudamos o valor de pink para cinza

console.log(cor)

//Escopo LOCAL
function animais(){
var animal = "Elefante" 
animal = "Girafa" //Reaproveitando a variável dentro do mesmo escopo (função)
console.log(animal)
}
animais();

// animal="Papagaio"  //Estou atualizando o meu valor fora da minha função/bloco.
// console.log(animal)



//LET 


let aluno = "Rafa"
// //console.log(aluno)

aluno ='Isa'
// console.log(aluno)

aluno = `Lais`
// console.log(aluno)

let idade = 28 // dado numérico

let sexta = true // true ou false

console.log(typeof sexta)


//CONST 

const nascimento = 1999
console.log(nascimento)

//nascimento = 1998
//console.log(nascimento)  //O tipo não ser alterado por ser uma constante


//NUMERAL

let n1 = 3
let n2 = 5
let total = n1 + n2
//let total = n1 - n2
//let total = n1 * n2
//let total = n1 / n2
//let total = n1 + n2 //concatenar, lembrar de ser uma string/texto

// + quer dizer soma ou "concatenação" '' ` `

console.log(total)


let nome = "Brendon"
let sobreNome = "Rodrigues"
sobreNome = "Silva"

let nomeCompleto = nome + ' ' + sobreNome

console.log(nomeCompleto)


//console.log(typeof nome)




