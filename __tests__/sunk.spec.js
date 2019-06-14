import { sunk } from '../scripts/sunk'

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