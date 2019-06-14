import { createGameBoard } from '../scripts/createGameBoard'

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

