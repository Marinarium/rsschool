module.exports = {
    changeButtonStart
};

function changeButtonStart() {
    const buttonStart = document.querySelector('.button-start');

    buttonStart.addEventListener("click", changeTextOfButton);

    function changeTextOfButton() {
        buttonStart.classList.add('active');
        buttonStart.innerText = "Repeat"
    }
}
