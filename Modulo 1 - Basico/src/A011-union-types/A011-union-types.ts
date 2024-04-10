// quando se tem mais de um tipo de retorno, eu posso usar essa notação  string | number | boolean

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  //  if (typeof a === 'string' && typeof b === 'string') return a + b;
  return `${a} ${b}`;
}
// falei para o typescript que ele só poderá ter string e number. E, cobri essas possibilidades no corpo da função

console.log(addOrConcat(20, 30));
console.log(addOrConcat('20', '30'));
console.log(addOrConcat(20, '40'));
