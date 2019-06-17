const modal = document.getElementById('simpleModal');

/**
 * Modal opening
 */
export const openModal = () => {
    modal.style.display = 'block';
    console.log('modal opened');
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
