/* eslint-disable */

// Tipos básicos (aqui ocorre inferência)
const nome: string = 'Luiz';
const idade: number = 0b1010;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer simbolo');
// let big: bigint = 10n

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3]
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', ' '];

// Objetos
export let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 30,
    nome: 'Luiz'
} // Ao colocar o ? no type annotation, você diz que aquela propriedade é opcional

// Função
function soma (x: number, y: number): number{
    return x + y
}
const result = soma(2, 2)
// Essas duas funções são iguais
const soma2: (x: number, y: number) => number = (x, y) => x + y;