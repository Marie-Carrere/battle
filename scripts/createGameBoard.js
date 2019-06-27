export function createGameBoard(rows, cols) {

    let arr = [];
  
    if (isNaN(rows) || isNaN(cols)) {
        throw new Error ('error message');
    }
  
    if (rows < 0 || cols < 0) {
        throw new Error ('error message');
    }
  
      // Creates all lines:
  	return new Array(rows).fill(cols).map(() => new Array(cols).fill(0));
  }

