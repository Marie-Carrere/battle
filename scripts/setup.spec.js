
/**
 * create the gameboard
 */


function createGameBoard(rows, cols) {

    var arr = [];

    if (isNaN(rows) || isNaN(cols)) {
        throw new Error ('error message');
    }

    if (rows < 0 || cols < 0) {
        throw new Error ('error message');
    }

    // Creates all lines:
    for(var i = 0; i < rows; i++) {

        // Creates an empty row
        arr.push([]);

        // Adds cols to the empty line:
        arr[i].push(new Array(cols));

        // Fill in the array
        for(var j = 0; j < cols; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
 
}


/**
 * fireMissle
 */
        
var hits = 0;

function fireMissle(board, row, col) {
  if (isNaN(row) || isNaN(col)) {
    throw new Error ('error message');
  }

  if (row < 0 || col < 0) {
    throw new Error ('error message');
  }

	if (board[row][col] === 1)  {
    hits = hits + 1;
    return 'Hit'; 
  }
  
  if (board[row][col] === 0) {
    return 'Miss';
  }
}

/**
 * Sunk
 */

function sunk(board, row, col) {
  var boatSize = board[row][col];
  var nbBoatIsHit = 1;

  for(var i = 1; i < boatSize; i++) {
    if(board[row][col + i] === 'hit') {
      nbBoatIsHit++;
    } 
  }

  for(var i = 1; i < boatSize; i++) {
    if(board[row][col - i] === 'hit') {
      nbBoatIsHit++;
    } 
  }

  if (nbBoatIsHit === boatSize) {
    return true;
  }

  nbBoatIsHit = 1;

  for(var i = 1; i < boatSize && board[row + i] ; i++) {
    if(board[row + i][col] === 'hit') {
      nbBoatIsHit++;
    } 
  }

  for(var i = 1; i < boatSize && board[row - i] ; i++) {
    if(board[row - i][col] === 'hit') {
      nbBoatIsHit++;
    } 
  }

  return nbBoatIsHit === boatSize;
  
}

/**
 * randomBoat
 */

 let boardSize = 10;
 let min = 0;

 function randomShip(board, randomGenerator, shipLength, horizontal = true) {
   
  // Generate randomly a X related to the board length
  let x = (Math.floor(randomGenerator() * boardSize) + min);
  let y = 0;

  // Loop over the ship's length to place the random coordinates
  for (let i = 0; i < shipLength; i++) {
    board[x][y + i] = shipLength;
  }

  return board
 }



/**
 * testing
 */

describe('create gameboard', () => {
    it('should generate 4*4 gameboard', () => {
        expect(createGameBoard(4, 4)).toEqual(
            [
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]
            ]
        );
    });

    it('should generate 8*8 gameboard', () => {
        expect(createGameBoard(8, 8)).toEqual(
            [
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0]
            ]
        );
    });

    test('throws an error', () => {
        expect(() => {
            createGameBoard(-1, 'toto');
        }).toThrowError(new Error('error message'));
      });
})

describe('fireMissle', () => {
  let board;
  beforeEach(() => {
    board = [
      [0,1,0,2,'hit',0],
      [0,3,0,'hit',3,3],
      [0,3,0,1,0,0],
      [0,'hit',0,1,0,0]
    ];
  });
    it('it should return miss', () => {
        expect(fireMissle(board, 0, 0)).toEqual('Miss')
    });

    it('it should return hit', () => {
        expect(fireMissle(board, 0, 1)).toEqual('Hit' )
    });


    test('throws an error', () => {
        expect(() => {
            fireMissle(board, -50, 'tata');
        }).toThrowError(new Error('error message'));
    });
})

describe('sunk', () => {
  let board;
  beforeEach(() => {
    board = [
      [0,1,0,2,'hit',0],
      [0,3,0,3,'hit','hit'],
      [0,3,0,1,0,0],
      [0,'hit',0,1,0,0]
    ];
  });

  it('it should return sunk when a boat of 1 cell is hit', () => {
      expect(sunk(board, 0, 1)).toEqual(true)
  });

  it('it should return sunk when a boat of 3 cells is hit', () => {
    expect(sunk(board, 1, 1)).toEqual(false)
  });

  it('it should return sunk when a boat of 2 cells is hit', () => {
    expect(sunk(board, 0, 3)).toEqual(true)
  });

  it('it should return a message if an horizontal boat is hit', () => {
    expect(sunk(board, 1, 3)).toEqual(true)
  });

  it('it should return a message if an horizontal boat is hit', () => {
    board[2][1] = 'hit';
    expect(sunk(board, 1, 1)).toEqual(true)
  });

  it('it should return sunk when a boat of 3 cells is hit', () => {
    expect(sunk(board, 2, 1)).toEqual(false)
  });

  it('it should return a message if an horizontal boat is hit', () => {
    board[1][1] = 'hit';
    expect(sunk(board, 2, 1)).toEqual(true)
  });

  it('it should return a message if an horizontal boat is hit', () => {
    board[1][4] = 3;
    expect(sunk(board, 1, 3)).toEqual(false)
  });

  it('it should return a message if an horizontal boat is hit', () => {
    board[1][4] = 3;
    board[1][3] = 'hit';
    expect(sunk(board, 1, 4)).toEqual(true)
  });
})  

describe('randomShip', () => {
  let board;
  beforeEach(() => {
    board = [
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0]
    ];
  });

  it('should return random coordinates related to the length\'s boat', function() {
    expect(randomShip(board, () => 0.2, 2)).toEqual(
      [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [2,2,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
      ]
    )
  })
})