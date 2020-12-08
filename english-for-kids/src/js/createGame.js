export function createGame() {
    const mainBlock = document.querySelector('.main');
    const allCardsBoxes = document.querySelectorAll('.cards');
    const allCards = document.querySelectorAll('.card');
    const buttonStart = document.querySelector('.button-start');
    const checkBox = document.querySelector('.switch__checkbox');
    let cardsForGame = [];
    let wordsForGame = [];
    let shuffledWords =[];
    let pathToSounds = [];

    buttonStart.addEventListener('click', playAudio);

    checkBox.addEventListener('click', createRandomAudioList);
    window.addEventListener('hashchange', createRandomAudioList);

    function createRandomAudioList (){
        if (checkBox.checked) {
            allCardsBoxes.forEach(function (box) {
                if (!box.classList.contains('visually-hidden')) {
                    cardsForGame = box.children;
                    cardsForGame.forEach(function (card) {
                        wordsForGame.push(card.getAttribute('data-word'));
                    });
                    shuffledWords = shuffleWords(wordsForGame);
                    shuffledWords.forEach(function (sound, i) {
                        pathToSounds.push(`audio/${shuffledWords[i]}.mp3`);
                    });
                }
            });
        } else {
            cardsForGame = [];
            wordsForGame = [];
            shuffledWords =[];
            pathToSounds = [];
        }
    }

    function playAudio(status){
        if(status === "change") {
            pathToSounds.pop();
            setTimeout(createPlayingOfAudio, 1500);
        } else {
            createPlayingOfAudio();
        }

        function createPlayingOfAudio() {
            let pathToSound = pathToSounds[pathToSounds.length-1];
            let audio = new Audio(pathToSound);
            audio.play();
        }
    }

    mainBlock.addEventListener('click', function (event) {
        let playSound = function (card) {
            if(card.contains(event.target) && checkBox.checked && !card.classList.contains('card_success')) {
                let nameOfSound = card.getAttribute('data-word');
                let nameOfAudio = shuffledWords[pathToSounds.length-1];
                if (nameOfSound === nameOfAudio ) {
                    let pathToShortSuccessSound = `audio/pew.mp3`;
                    let audioSound = new Audio(pathToShortSuccessSound);
                    audioSound.play();
                    card.classList.add('card_success');
                    playAudio('change');
                } else if(!card.classList.contains('card_success')){
                    let pathToShortSuccessSound = `audio/mistake.mp3`;
                    let audioSound = new Audio(pathToShortSuccessSound);
                    audioSound.play();
                }
            }
        };

        for (let i = 0; i < allCards.length; i++) {
            playSound(allCards[i]);
        }
    });

    function shuffleWords(array) {
        return array.sort(() => Math.random() - 0.5);
    }
}


