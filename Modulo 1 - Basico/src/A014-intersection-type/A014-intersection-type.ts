type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Felipe',
  sobrenome: 'Douglas',
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type intersecao = AB & AC & AD;
// Veja que, ao passar o mouse em cima, a interceção é só o A

console.log(pessoa);
