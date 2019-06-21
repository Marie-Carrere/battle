import { initGameBoard } from "./initGameBoard.js";

const modal = document.getElementById('modal');

/**
 * Modal opening
 */

export const openModal = () => {
    modal.style.display = 'block';

}


/**
 * Modal closing
 */
const closeBtn = document.getElementById('close-button');
const closeModal = () => modal.style.display = 'none';
closeBtn.addEventListener('click', closeModal);

const closeOutsideModal = (event) => {
		if(event.target == modal) {
    	modal.style.display = 'none';
    }
}
window.addEventListener('click', closeOutsideModal);


/**
 * Reload gameboard when clicking on yes 
 */
const reload = document.querySelector('.nes-radio_yes');
const game = document.querySelector('#gameboard');
reload.addEventListener('click', () => {
    modal.remove();
    game.innerHTML = "";
    initGameBoard();
});




