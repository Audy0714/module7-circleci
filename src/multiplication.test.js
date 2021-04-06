// TDD 1er fichier à créer multiplication.test.js er faire tous nos tests qui échoueront donc la partie R = rouge
// ensuite multiplication.js

// R = rouge = test qui échoue car le fichier multiplication.js n'est pas encore créer car ce sera notre vrai code
// V = vert = test ok
// R = refactor = nettoyer le code

import multiplication from './multiplication';

it('multiplication de 2 number', () => {
    expect(multiplication(2, 3)).toBe(6);
    expect(typeof multiplication(2, 3)).toBe('number');
    expect(multiplication(2, 3)).toEqual(6);
    expect(multiplication("toto", "tata")).toEqual(Error('Number expected as parameters'));
})