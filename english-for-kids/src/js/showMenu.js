module.exports = {
    showMenu
};

function showMenu() {
    const burger = document.querySelector('.main-menu__burger');
    const mainMenu = document.querySelector('.main-menu__list');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('.body');
    const menuItems = document.querySelectorAll('.main-menu__item');

    body.addEventListener('click', function (event) {
        let changeMenuVisibility = function (menuItem) {
            if (burger.contains(event.target)) {
                mainMenu.classList.toggle('visually-hidden');
                burger.classList.toggle('active');
                overlay.classList.toggle('active');
                body.classList.toggle('overflow-hidden');
            } else if (burger.classList.contains('active') && !(mainMenu.contains(event.target))) {
                mainMenu.classList.toggle('visually-hidden');
                burger.classList.toggle('active');
                overlay.classList.toggle('active');
                body.classList.toggle('overflow-hidden');
            } else if (menuItem.contains(event.target) && burger.classList.contains('active')){
                mainMenu.classList.toggle('visually-hidden');
                burger.classList.toggle('active');
                overlay.classList.toggle('active');
                body.classList.toggle('overflow-hidden');
            }
        };

        for (let i = 0; i < menuItems.length; i++) {
            changeMenuVisibility(menuItems[i]);
        }
    });
}
