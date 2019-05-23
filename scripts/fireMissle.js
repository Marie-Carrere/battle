      
export function fireMissle(board, row, col) {
  let hits = 0;

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