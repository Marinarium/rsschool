module.exports = {
    showMenu
};

function showMenu() {
    const burger = document.querySelector('.main-menu__burger');
    const mainMenu = document.querySelector('.main-menu__list');
    const overlay = document.querySelector('.overlay');
    const body = document.querySelector('.body');

    body.addEventListener('click', function (event) {
        if (burger.contains(event.target)) {
            mainMenu.classList.toggle('visually-hidden');
            burger.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('overflow-hidden');
        } else if(burger.classList.contains('active') && !(mainMenu.contains(event.target))) {
            mainMenu.classList.toggle('visually-hidden');
            burger.classList.toggle('active');
            overlay.classList.toggle('active');
            body.classList.toggle('overflow-hidden');
        }
    });
}
