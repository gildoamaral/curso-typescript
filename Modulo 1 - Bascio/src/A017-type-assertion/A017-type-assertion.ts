//  Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// informando ao programa que essa variavel não pode ser null
// Non-null assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer valor';
input.focus();

//  Type assertion
const body4 = document.querySelector('body') as unknown as number;
