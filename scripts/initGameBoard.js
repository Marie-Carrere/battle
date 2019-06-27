import { fireMissle } from "./fireMissle.js"
import { createGameBoard } from "./createGameBoard.js"
import { generateRandomShip } from "./generateRandomShip.js"
import { openModal } from "./modal.js"

/**
 * Sets up our click event listeners
 * On click, call fireMissile
 * @param {*} DOMGameboard 
 * @param {*} gameboard 
 */
const setupEventListener = (DOMGameboard, gameboard) => {
    let counter = 0;

    DOMGameboard.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            cell.addEventListener("click", () => {
                const isHit = fireMissle(gameboard, rowIndex, cellIndex)
                // Boat has been hit, change the UI
                if (!isHit) {
                    cell.innerHTML = '🌊';
                }

                if (isHit) {
                    cell.innerHTML = '💥';
                    counter++;  
                    if (counter === 9) {
                        openModal();
                    }              
                }                    
            })
        })
    });
}

const generateTable = (DOMGameboard, gameboard) => {
    let table = document.getElementById('gameboard');

    for (let indexR = 0; indexR < gameboard.length; indexR++) {
        let cellArray = [];
        let row = gameboard[indexR];
        row = document.createElement('tr');
        row.setAttribute('id', indexR);
        table.appendChild(row);

        for (let indexC = 0; indexC < gameboard[indexR].length; indexC++) {
            let col = document.createElement('td');
            col.setAttribute('class', indexC);
            row.appendChild(col);
            cellArray.push(col);
        }

        DOMGameboard.push(cellArray)
        cellArray = [];
    }
}


/**
 * Creates a DOM gameboard
 * Each row is a tr and each cell a td
 */

export function initGameBoard() {
    const gameboard = createGameBoard(5, 5);
    const DOMGameboard = [];

    // Initialize html table
    generateTable(DOMGameboard, gameboard);
    
    // Initialize our enemies
    generateRandomShip(gameboard, Math.random);

    // Set event listener on the board
    setupEventListener(DOMGameboard, gameboard);
}






