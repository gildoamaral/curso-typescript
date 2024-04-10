// Never serve pra dizer que determinada função não retorna nada Nunca. É apenas uma forma de se comunicar com outros desenvolvedores

export function criaErro(): never {
 throw new Error('Erro qualquer');
}

criaErro();
