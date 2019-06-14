/**
 * Checks if a boat is hit
 * If so, return true
 * Otherwise return false
 */
export function fireMissle(board, row, col) {
  console.log("Firing missle");
  if (isNaN(row) || isNaN(col)) {
    throw new Error('error message');
  }

  if (row < 0 || col < 0) {
    throw new Error('error message');
  }

  if (board[row][col] > 0) {
    return true;
  }
  return false;
}