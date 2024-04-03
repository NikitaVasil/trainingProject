import './index.html';
import './styles/styles.scss';

console.debug('Debug');

//Переменные кнопки и модального окна
const burgerbutton = document.querySelector('.burger-button');
const modal = document.querySelector('#mobileOverlay');

burgerbutton.addEventListener('click', ()=> {
  console.log('Бургер')
  modal.showModal();
})
