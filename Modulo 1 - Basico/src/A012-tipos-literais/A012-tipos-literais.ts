let x = 10; // eslint-disable-line
x = 0b1010;
// repare que x pode ser mudado para qualquer tipo de number, mas nunca uma string

const y = 10;
// repare que y é tipado como '10', que é um subtipo de number. ele nunca poderá ser qualquer coisa além de 10

// let a: 100 = 100;
// let a = 100 as const;
// a = 120;
// 100 é um 'tipo literal'. estou dizendo que a terá o valor 100, sendo impossível ele assumir outro valor

const pessoa = {
  nome: 'Luiz' as const, // tipo literal
  sobrenome: 'Miranda',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}
console.log(escolhaCor('Vermelho'));

export default 1;
