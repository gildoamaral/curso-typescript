let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
 // aqui temos a abertura da função
 firstName: string,
 lastName?: string,
): {
 // aqui temos a tipagem (type annotation)
 firstName: string;
 lastName?: string;
} {
 // aqui já começa o corpo da função
 return {
  firstName,
  lastName,
 };
}

export function squareOf(x: any) {
 if (typeof x === 'number') return x * x;
 return;
}

const squareOfTwoNumber = squareOf(2);

if (squareOfTwoNumber === undefined) {
 console.log('Conta inválida');
} else {
 console.log(squareOfTwoNumber * 100);
}
