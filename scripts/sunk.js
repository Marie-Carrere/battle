export function sunk(board, row, col) {
    let boatSize = board[row][col];
    let nbBoatIsHit = 1;

    for(let i = 1; i < boatSize; i++) {
        if(board[row][col + i] === 'hit') {
            nbBoatIsHit++;
        } 
    }

    for(let i = 1; i < boatSize; i++) {
        if(board[row][col - i] === 'hit') {
            nbBoatIsHit++;
        } 
    }

    if (nbBoatIsHit === boatSize) {
        return true;
    }

    nbBoatIsHit = 1;

    for(let i = 1; i < boatSize && board[row + i] ; i++) {
        if(board[row + i][col] === 'hit') {
            nbBoatIsHit++;
        } 
    }

    for(let i = 1; i < boatSize && board[row - i] ; i++) {
        if(board[row - i][col] === 'hit') {
            nbBoatIsHit++;
        } 
    }

    return nbBoatIsHit === boatSize;
}