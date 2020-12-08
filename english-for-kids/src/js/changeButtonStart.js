module.exports = {
    changeButtonStart
};

function changeButtonStart() {
    const buttonStart = document.querySelector('.button-start');

    buttonStart.addEventListener("click", changeTextOfButton);

    function changeTextOfButton() {
        buttonStart.innerText = "Repeat";
    }
}
