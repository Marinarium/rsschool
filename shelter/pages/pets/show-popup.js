const friends = document.getElementById('friends');
const popupList = document.getElementById('popup-list');

friends.addEventListener('click', function (event) {
        const cards = document.querySelectorAll('.card');
        const popups = document.querySelectorAll('.popup__item');
        const crosses = document.querySelectorAll('.popup__cross');

        let showPopup = function (card, popup, cross) {

            if (card.contains(event.target)) {
                popup.classList.remove('visually-hidden');
                popupList.classList.remove('visually-hidden');
                popupList.classList.add('overlay_popup');
                body.classList.add('overflow-hidden');

            } else if (!popup.classList.contains("visually-hidden") && !popup.contains(event.target)) {
                popup.classList.add('visually-hidden');
                popupList.classList.add('visually-hidden');
                popupList.classList.remove('overlay_popup');
                body.classList.remove('overflow-hidden');

            } else if (!popup.classList.contains("visually-hidden") && cross.contains(event.target)) {
                popup.classList.add('visually-hidden');
                popupList.classList.add('visually-hidden');
                popupList.classList.remove('overlay_popup');
                body.classList.remove('overflow-hidden');
            }


        };

        for (let i = 0; i < cards.length; i++) {
            showPopup(cards[i], popups[i], crosses[i]);
        }
    }
);