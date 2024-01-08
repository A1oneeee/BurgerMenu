const toogleBtn = document.querySelector('.toggle_btn');
const toogleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toogleBtn.addEventListener('click', () => {
	dropDownMenu.classList.toggle('open');
});