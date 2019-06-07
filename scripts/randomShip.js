// Given a board of 5x5
// when i fired the function
// Then my board contains a 2b1 1b3 1b4


/**
 * @param Array board
 * @param function random
 * @returns Array resultat
 */
export function generateRandomShip(board, random) {
    const boatsToGenerate = [1, 1, 3, 4];

    const resultat = board;
    for(let boatIndex in boatsToGenerate) {
        const boatSize = boatsToGenerate[boatIndex];

        const deltaMax = board[0].length - boatSize;
        const deltaX = Math.floor(random() * deltaMax);
        
        for( let i = deltaX; i < boatSize + deltaX; i++) {
            board[boatIndex][i] = boatSize;
        }

    }
    return resultat
}
