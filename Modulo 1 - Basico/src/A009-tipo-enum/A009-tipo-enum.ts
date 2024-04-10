// tipo de dado e valor (existe em java, phyton, C#...);
// geralmente usado quando queremos enumerar alguma coisa;

enum Cores {
 // começa com maiúscula
 VERMELHO = 2, // 2
 AZUL = 100, // 3
 AMARELO = 200, // 4
 ROXO = 'ROXO',
 ROSA = 201,
}

enum Cores {
 //  VERDE = 'AMARULA',
 LARANJA = 200,
 PRATA = 201,
 OURO,
}

export function escolhaACor(cor: Cores): void {
 console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);

// console.log(Cores);
// console.log(Cores[2]);
// console.log(Cores.VERMELHO);
