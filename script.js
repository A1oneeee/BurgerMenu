const toogleBtn = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');
const icon = document.querySelector('#icon');

toogleBtn.addEventListener('click', () => {
	dropDownMenu.classList.toggle('open');
	icon.name = (icon.name === 'menu' ? 'close' : 'menu');
});
