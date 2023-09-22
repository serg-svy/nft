const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		console.log(iconMenu);
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', () => {
      document.body.classList.remove('lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
    });
  });
}