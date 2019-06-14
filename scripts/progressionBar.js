const progress = document.querySelector('#progress');
const content = document.querySelector('.content');

const progression = setInterval( e => {
   if(progress.value < 100) {
      progress.value = progress.value + 1;
      } else {
         content.style.display = 'flex';
         clearInterval(progression);
      }

}, 30);

