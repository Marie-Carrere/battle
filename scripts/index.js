/**
 * Click on each cell to get the id
 */

let table = document.getElementById("board"), rIndex, cIndex;

for(let i = 0; i < board.rows.length; i++) {

    for(let j = 0; j < table.rows[i].cells.length; j++) {

        table.rows[i].cells[j].onclick = function() {

            rIndex = this.parentElement.rowIndex;
            cIndex = this.cellIndex+1;
            console.log("Row : "+rIndex+" , Cell : "+cIndex);
        }
    }
}



