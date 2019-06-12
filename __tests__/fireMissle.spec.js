import { fireMissle } from '../scripts/fireMissle'

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