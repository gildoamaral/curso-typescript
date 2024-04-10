// const objetoA = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };
// objetoA.chaveC = 'Tentei criar um objeto'; ISSO É IMPOSSÍVEL por que não foi definida essa chave la;

const objetoA: Record<string, unknown> = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Mudei o valor';
objetoA.chaveC = 'Criei outra chave';
// Agora se tornou possível, pois Record<string, unknown> faz eu criar um objeto quase igual ao ANY

const objetoB: {
  readonly chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};
// objetoB.chaveA = 'Tentei alterar'; chaveA é read Only
objetoB.chaveK = 'Chave criada';
// Os dois ultimos objetos são construidos iguais

console.log(objetoB, objetoA);
