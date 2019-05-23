export function createGameBoard(rows, cols) {

    let arr = [];
  
    if (isNaN(rows) || isNaN(cols)) {
        throw new Error ('error message');
    }
  
    if (rows < 0 || cols < 0) {
        throw new Error ('error message');
    }
  
    // Creates all lines:
    for(let i = 0; i < rows; i++) {
  
        // Creates an empty row
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push(new Array(cols));
  
        // Fill in the array
        for(let j = 0; j < cols; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
  }

