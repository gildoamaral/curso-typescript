// para o typescript, a identidade do tipo não importa muito. Só as restrições

type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return user.username === sentValue.username && user.password === sentValue.password;
};

const bdUser = { username: 'Joao', password: '123456' };
const sentUser = { username: 'Joao', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);

// É complicado o assunto, mas eis o que eu entendi:
/*
 * O TS não está preocupado com o tipo aferido ao nome do role
 * ex.: bdUser não possui um tipo, apenas o seu conteúdo possui
 * Sendo assim, se o conteúdo aferido aquele rolê estiver com os tipos corretos, relativos a tipagem que eu dei nos parametros, ele vai dar certo.
 * Sendo assim, eu consigo colocar mais chaves nos meus objetos. Não importa, pq ele não está avaliando o objeto em si, mas sim se o conteúdo bate.
 */
