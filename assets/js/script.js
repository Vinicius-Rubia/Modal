const btnSubscribe = document.querySelector(".btn");
const btnClose = document.querySelector(".close");

btnSubscribe.addEventListener('click', () => {
    popupToggle();
});

btnClose.addEventListener('click', () => {
    popupToggle();
});

// Função do Popup
function popupToggle() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active')
}
