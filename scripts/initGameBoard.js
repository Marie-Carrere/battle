export function initGameBoard(gameboard) {
    let table = document.getElementById('gameboard');

    console.log(table)
    
    for(let indexR = 0; indexR < gameboard.length; indexR++) {
        let row = gameboard[indexR];
        row = document.createElement('tr');
        row.setAttribute('id', indexR);
        table.appendChild(row);

        for(let indexC = 0; indexC < gameboard[indexR].length; indexC++) {
            let col = document.createElement('td');
            col.setAttribute('class', indexC);
            row.appendChild(col);
        }
    }
}