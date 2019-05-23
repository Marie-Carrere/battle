export function randomShip(board, randomXGenerator, randomYGenerator, shipLength, horizontal = true) {
    let boardSize = 10;
    // Generate randomly a X related to the board length
    let x = (Math.floor(randomXGenerator() * boardSize));
    let y = (Math.floor(randomYGenerator() * boardSize));

    // Loop over the ship's length to place the random coordinates
    for (let i = 0; i < shipLength; i++) {
        board[x][y + i] = shipLength;
    }

    console.log(board);
    return board
    
}
