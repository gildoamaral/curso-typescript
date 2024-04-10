// Unknown vem antes mesmo do Any. Logo, é como se fosse o pai de todos os tipos;

let x: any;
x = 100;
x = 'Luiz';
x = 900;
const y = 900;

console.log(x + y);
// Veja que any deixou eu fazer essa operação;

let z: unknown;
z = 400;
z = 500;
// Con unknown ele não permite

if (typeof z === 'number') {
 console.log(z + y);
}
