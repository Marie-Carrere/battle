const modal = document.getElementById('simpleModal');

/**
 * Modal opening
 */
const modalBtn = document.getElementById('modal-button');
// const openModal = () => modal.style.display = 'block';
const openModal = () => modal.style.display = 'block';


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



