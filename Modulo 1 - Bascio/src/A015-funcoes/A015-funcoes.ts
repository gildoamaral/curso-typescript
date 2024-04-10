// Criação mais bonitinha
type mapStringsCallback = (item: string) => string; //criando que item que esse tipo recebe e que tipo ele retorna

export function mapString(array: string[], callbackfn: mapStringsCallback): string[] {
 const newArray: string[] = [];

 for (let i = 0; i < array.length; i++) {
  const item = array[i];
  newArray.push(callbackfn(item));
 }

 return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = console.log(mapString(abc, (item) => item.toUpperCase()));

//CRIAÇÃO FEINHA

// function mapString(array: string[], callbackfn: CallableFunction): string[] {
//  const newArray: string[] = [];

//  for (let i = 0; i < array.length; i++) {
//   newArray.push(callbackfn(array[i]));
//  }
//  return newArray;
// }

// const abc = ['a', 'b', 'c'];
// const abcMapped = mapString(abc, (item: any) => {
//  return item.toUpperCase();
// });

// console.log(abcMapped);
