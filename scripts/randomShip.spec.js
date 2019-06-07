import { generateRandomShip } from './randomShip'

describe('generateRandomShip', () => {
    let board;
    beforeEach(() => {
      board = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
      ];
    });

    it('should add boats on the game board', () => {
      const resultat = generateRandomShip(board, () => 0);
      expect(resultat).toEqual([
        [1,0,0,0,0],
        [1,0,0,0,0],
        [3,3,3,0,0],
        [4,4,4,4,0],
        [0,0,0,0,0],
      ])
    })

    it('should add boats on the game board', () => {
      board = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
      ];

      const resultat = generateRandomShip(board, () => 0);
      expect(resultat).toEqual([
        [1,0,0,0,0,0],
        [1,0,0,0,0,0],
        [3,3,3,0,0,0],
        [4,4,4,4,0,0],
      ])
    })
    it('should add boats on the game board', () => {
      board = [
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
      ];

      const resultat = generateRandomShip(board, () => 1);
      expect(resultat).toEqual([
        [0,0,0,0,0,1],
        [0,0,0,0,0,1],
        [0,0,0,3,3,3],
        [0,0,4,4,4,4],
      ])
    })
});