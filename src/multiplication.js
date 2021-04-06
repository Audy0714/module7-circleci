// TDD 2ème fichier à créer multiplication.js le vrai code

// si params a n'est pas un number 
// ou params b n'est pas un number
// ALORS
// je retourne une Error avec un message 'Number expected as parameters'
// Refactor : la JSDOC, nettoyer les lignes en trop.....
/**
 * 
 * @param {number} a premier params de la multiplication
 * @param {number*} b deuxième params de la multiplication
 */
function multiplication(a, b) {

    if(typeof a !== 'number' || typeof b !== 'number') {
        return Error('Number expected as parameters')
    } 

    return a * b;
    
}

export default multiplication;