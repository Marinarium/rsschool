export function changeDeckOfCards() {
    const allCards = document.querySelectorAll('.cards');
    const allCardsOfWords = document.querySelectorAll('.card');
    const topics = document.querySelector('.topics');
    const animals = document.querySelector('.cards_animals');
    const birds = document.querySelector('.cards_birds');
    const fishes = document.querySelector('.cards_fishes');
    const plants = document.querySelector('.cards_plants');
    const colors = document.querySelector('.cards_colors');
    const food = document.querySelector('.cards_food');
    const people = document.querySelector('.cards_people');
    const places = document.querySelector('.cards_places');
    const menuLinks = document.querySelectorAll('.main-menu__link');
    const buttonStart = document.querySelector('.button-start');

    addHashDependencies();

    window.addEventListener('hashchange', catchHash);

    function catchHash() {
        addHashDependencies();
    }

    function addVissualyHidden(arrayOfElements) {
        arrayOfElements.forEach(function (item) {
            item.classList.add('visually-hidden');
        });
    }

    function showActiveMenuLink() {
        menuLinks.forEach(function (item) {
            if(item.getAttribute('href') === window.location.hash) {
                item.classList.add('active');
            } else if (item.classList.contains('active')){
                item.classList.remove('active');
            }
        });
    }

    function removeHiddenCards(){
        allCardsOfWords.forEach(function (card) {
            card.classList.remove('card_success');
        });
    }

    function addHashDependencies(){
        if (location.hash === ""){
            addVissualyHidden(allCards);
            topics.classList.remove('visually-hidden');
            menuLinks.forEach(function (item) {
                if(window.location.hash === "" && item.getAttribute('href')==="#") {
                    item.classList.add('active');
                } else if (item.classList.contains('active')){
                    item.classList.remove('active');
                }
            });
            buttonStart.style.display = "none";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#animals") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            animals.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.removeAttribute("style");
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#birds") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            birds.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.removeAttribute("style");
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#fishes") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            fishes.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.removeAttribute("style");
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#plants") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            plants.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.removeAttribute("style");
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#colors") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            colors.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#food") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            food.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.removeAttribute("style");
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#people") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            people.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.removeAttribute("style");
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
        if (location.hash === "#places") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            places.classList.remove('visually-hidden');
            showActiveMenuLink();
            buttonStart.removeAttribute("style");
            buttonStart.innerText = "Start game";
            buttonStart.classList.remove('button-start__repeat');
            removeHiddenCards();
        }
    }

}

