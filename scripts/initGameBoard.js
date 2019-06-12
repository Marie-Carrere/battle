import { fireMissle } from "./fireMissle.js"
import { generateRandomShip } from "./randomShip.js"

/**
 * Sets up our click event listeners
 * On click, call fireMissile
 * @param {*} DOMGameboard 
 * @param {*} gameboard 
 */
const setupEventListener = (DOMGameboard, gameboard) => {
    DOMGameboard.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            cell.addEventListener("click", () => {
                const isHit = fireMissle(gameboard, rowIndex, cellIndex)

                // Boat has been hit, change the UI
                if (isHit) {
                    cell.style.backgroundColor = "red"
                }
            })
        })
    });
}

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