// Não possui no javascript puro;

const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, number?] = [1, 'Luiz'];
const dadosCliente3: [number, string, ...string[]] = [7, 'LDuiz'];

dadosCliente2[0] = 100;

console.log(dadosCliente1);
console.log(dadosCliente3);
