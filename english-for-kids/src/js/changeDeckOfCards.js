export function changeDeckOfCards() {
    const allCards = document.querySelectorAll('.cards');
    const topics = document.querySelector('.topics');
    const animals = document.querySelector('.cards_animals');
    const birds = document.querySelector('.cards_birds');
    const fishes = document.querySelector('.cards_fishes');
    const plants = document.querySelector('.cards_plants');
    const colors = document.querySelector('.cards_colors');
    const food = document.querySelector('.cards_food');
    const people = document.querySelector('.cards_people');
    const places = document.querySelector('.cards_places');

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

    function addHashDependencies(){
        if (location.hash === ""){
            addVissualyHidden(allCards);
            topics.classList.remove('visually-hidden');
        }
        if (location.hash === "#animals") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            animals.classList.remove('visually-hidden');
        }
        if (location.hash === "#birds") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            birds.classList.remove('visually-hidden');
        }
        if (location.hash === "#fishes") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            fishes.classList.remove('visually-hidden');
        }
        if (location.hash === "#plants") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            plants.classList.remove('visually-hidden');
        }
        if (location.hash === "#colors") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            colors.classList.remove('visually-hidden');
        }
        if (location.hash === "#food") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            food.classList.remove('visually-hidden');
        }
        if (location.hash === "#people") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            people.classList.remove('visually-hidden');
        }
        if (location.hash === "#places") {
            addVissualyHidden(allCards);
            topics.classList.add('visually-hidden');
            places.classList.remove('visually-hidden');
        }
    }

}

