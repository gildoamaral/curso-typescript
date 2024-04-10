// Array<Tipo> - Tipo[] ESSAS SÃO AS DUAS FORMAS DE FAZER ARRAY;

export function multiplicaArgs(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaArgs(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: Array<string>): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const concatenacao = concatenaArgs('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenacao);
console.log(upper);
