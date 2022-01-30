/* eslint-disable */

// Tipos básicos (aqui ocorre inferencia de tipos)
let nome: string = 'Bruno'; // Qualquer tipo de string "" ou '' ou ``
let idade: number = 21; // Qualquer tipo de número inteiro ou decimal ou float ou complexo ou infinito ou NaN
let adulto: boolean = true; // Qualquer tipo de boolean true ou false
let simbol: symbol = Symbol('qualquer symbol'); // Qualquer tipo de symbol ou identificador único (não pode ser repetido)
// let big: bigint = 10n; // bigint

// Tipos de array (aqui ocorre inferencia de tipos)
let arrayDeNumeros: Array<number> = [1, 2, 3]; // Qualquer tipo de array de números
let arrayDeNumeros2: number[] = [1, 2, 3]; // Qualquer tipo de array de números
let arrayDeStrings: Array<string> = ['a', 'b', 'c']; // Qualquer tipo de array de strings
let arrayDeStrings2: string[] = ['a', 'b', 'c']; // Qualquer tipo de array de strings

// tipos de objetos (aqui ocorre inferencia de tipos)
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  idade: 21,
  nome: 'Bruno',

}; // Qualquer tipo de objeto com nome e idade

// Tipos de funções (aqui ocorre inferencia de tipos)
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y; 
