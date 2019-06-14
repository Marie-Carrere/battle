import { fireMissle } from "./fireMissle.js"
import { generateRandomShip } from "./randomShip.js"

/**
 * Creates a DOM gameboard
 * Each row is a tr and each cell a td
 * @param {*} gameboard - the initial empty table
 */
export function initGameBoard(gameboard) {
    let DOMGameboard = []
    let table = document.getElementById('gameboard');

    for (let indexR = 0; indexR < gameboard.length; indexR++) {
        let cellArray = []
        let row = gameboard[indexR];
        row = document.createElement('tr');
        row.setAttribute('id', indexR);
        table.appendChild(row);

        for (let indexC = 0; indexC < gameboard[indexR].length; indexC++) {
            let col = document.createElement('td');
            col.setAttribute('class', indexC);
            row.appendChild(col);
            cellArray.push(col)
        }

        DOMGameboard.push(cellArray)
        cellArray = []
    }

    // Initialize our enemies
    gameboard = generateRandomShip(gameboard, Math.random)

    setupEventListener(DOMGameboard, gameboard)
}

/**
 * Sets up our click event listeners
 * On click, call fireMissile
 * @param {*} DOMGameboard 
 * @param {*} gameboard 
 */

let counter = 0;

const setupEventListener = (DOMGameboard, gameboard) => {
    DOMGameboard.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            cell.addEventListener("click", () => {
                const isHit = fireMissle(gameboard, rowIndex, cellIndex)
                console.log(gameboard)
                // Boat has been hit, change the UI
                if (!isHit) {
                    cell.innerHTML = '🌊'
                }
                
                // TODO: create modal to show the winner
                if (isHit) {
                    cell.innerHTML = '💥';
                    counter++;  
                    if (counter === 9) {
                        alert('you won');
                    }
                                      
                }

                
            })
        })
    });
}





