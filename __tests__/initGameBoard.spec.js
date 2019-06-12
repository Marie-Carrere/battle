import { initGameBoard } from '../scripts/initGameBoard'

describe('initialize the gameboard', () => {
    it('should initialized and create the board with 5 rows and 5 columns into the DOM', function() {
        document.body.innerHTML = '<table id="gameboard"></table>';

        let gameboard = [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
        initGameBoard(gameboard);

        expect(document.getElementById('gameboard')).toMatchSnapshot();
    })
})